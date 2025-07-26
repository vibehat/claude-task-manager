const { execSync } = require('child_process');

function getRangeFromPreviousTag(versionFromConfig) {
   try {
      // Get all tags sorted by version (descending)
      const tags = execSync('git tag --sort=-version:refname', { encoding: 'utf-8' })
         .trim()
         .split('\n')
         .filter(Boolean)
         .filter((tag) => tag.startsWith('v')); // Only version tags

      const currentTag = `v${versionFromConfig}`;
      console.log(`🔍 Looking for range from previous tag for: ${currentTag}`);
      console.log(
         `📋 Available tags: ${tags.slice(0, 5).join(', ')}${tags.length > 5 ? '...' : ''}`
      );

      const currentIndex = tags.indexOf(currentTag);

      if (currentIndex > 0) {
         // Found current tag, use previous tag
         const prevTag = tags[currentIndex + 1];
         const range = `${prevTag}..${currentTag}`;
         console.log(`✅ Using tag range: ${range}`);
         return range;
      } else if (currentIndex === 0) {
         // Current tag is the latest, compare with HEAD
         const range = `${currentTag}..HEAD`;
         console.log(`✅ Using range from latest tag to HEAD: ${range}`);
         return range;
      } else {
         // Current tag not found yet (probably creating new release)
         if (tags.length > 0) {
            const lastTag = tags[0];
            const range = `${lastTag}..HEAD`;
            console.log(`✅ Current tag not found, using range from latest tag: ${range}`);
            return range;
         } else {
            // No tags exist yet
            const range = 'HEAD~15..HEAD';
            console.log(`⚠️ No tags found, using fallback: ${range}`);
            return range;
         }
      }
   } catch (e) {
      console.warn('⚠️ Failed to get tag range, using fallback HEAD~15..HEAD');
      console.warn(`Error: ${e.message}`);
      return 'HEAD~15..HEAD';
   }
}

function getCommits(range = 'HEAD~15..HEAD') {
   try {
      console.log(`📥 Getting commits for range: ${range}`);
      const raw = execSync(
         `git log ${range} --pretty=format:"---COMMIT---%n%H%n%s%n%b%n%an <%ae>"`,
         {
            encoding: 'utf-8',
         }
      );

      const commits = raw.split('---COMMIT---\n').filter(Boolean).map(parseRawCommit);

      console.log(`📊 Found ${commits.length} commits in range`);
      return commits;
   } catch (e) {
      console.warn(`⚠️ Failed to get commits for range ${range}: ${e.message}`);
      return [];
   }
}

function parseRawCommit(chunk) {
   const lines = chunk.trim().split('\n');

   const hash = lines.shift(); // First line
   const subject = lines.shift(); // Second line

   // Extract author (last line matching "<...>")
   let author = '';
   for (let i = lines.length - 1; i >= 0; i--) {
      const line = lines[i];
      if (/^.+ <.+>$/.test(line)) {
         author = line;
         lines.splice(i, 1); // Remove from body
         break;
      }
   }

   const body = lines.join('\n').trim();
   return { hash, subject, body, author };
}

// New function to get the range for a specific tag
function getRangeForTag(tagName) {
   try {
      // Get all tags sorted by version (descending)
      const tags = execSync('git tag --sort=-version:refname', { encoding: 'utf-8' })
         .trim()
         .split('\n')
         .filter(Boolean)
         .filter((tag) => tag.startsWith('v')); // Only version tags

      console.log(`🔍 Getting range for tag: ${tagName}`);
      const currentIndex = tags.indexOf(tagName);

      if (currentIndex >= 0 && currentIndex < tags.length - 1) {
         // Found current tag and there's a previous tag
         const prevTag = tags[currentIndex + 1];
         const range = `${prevTag}..${tagName}`;
         console.log(`✅ Tag-based range: ${range}`);
         return range;
      } else if (currentIndex === tags.length - 1) {
         // This is the first tag
         const range = `HEAD~15..${tagName}`;
         console.log(`✅ First tag range: ${range}`);
         return range;
      } else {
         // Tag not found or other issue
         console.warn(`⚠️ Could not determine range for tag ${tagName}`);
         return 'HEAD~15..HEAD';
      }
   } catch (e) {
      console.warn(`⚠️ Failed to get range for tag ${tagName}: ${e.message}`);
      return 'HEAD~15..HEAD';
   }
}

module.exports = {
   getCommits,
   getRangeFromPreviousTag,
   getRangeForTag,
};
