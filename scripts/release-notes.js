const fs = require('fs');
const path = require('path');
const { getCommits, getRangeFromPreviousTag, getRangeForTag } = require('./git');
const { parseCommit } = require('./sematic-commit');
const { formatNotes, prepareStructuredReleaseNotes } = require('./notes');

// Load config
const configPath = path.resolve('release.json');
if (!fs.existsSync(configPath)) {
  console.error('❌ release.json not found.');
  process.exit(1);
}
const config = JSON.parse(fs.readFileSync(configPath));
const version = fs.readFileSync('VERSION', 'utf-8').trim();

console.log('✅ Config loaded.');
console.log(`📌 Version: ${version}`);
console.log('🚀 Generating release notes...');

// Simple manual CLI args parsing: --base=xxx --head=yyy --tag=vX.X.X
const rawArgs = process.argv.slice(2);
const argMap = {};

for (const arg of rawArgs) {
  const [key, val] = arg.replace(/^--/, '').split('=');
  if (key && val) argMap[key] = val;
}

const baseSha = argMap.base || process.env.BASE_SHA;
const headSha = argMap.head || process.env.HEAD_SHA;
const tagName = argMap.tag || process.env.GITHUB_REF_NAME; // GitHub Actions provides tag name

// Determine commit range
let range;
let releaseContext = 'manual'; // manual, tag-based, or pr-based

if (tagName && tagName.startsWith('v')) {
  // Tag-based release (auto from GitHub Actions or manual with --tag)
  releaseContext = 'tag-based';
  range = getRangeForTag(tagName);
  console.log(`🏷️ Tag-based release detected: ${tagName}`);
  console.log(`🔧 Using tag-based range: ${range}`);
} else if (baseSha && headSha) {
  // PR-based range provided
  releaseContext = 'pr-based';
  range = `${baseSha}..${headSha}`;
  console.log(`📋 PR-based release with custom range: ${range}`);
} else {
  // Fallback to version-based range detection
  releaseContext = 'manual';
  range = getRangeFromPreviousTag(version);
  console.log(`🔧 Manual release, using version-based range: ${range}`);
}

console.log(`📍 Release context: ${releaseContext}`);
console.log(`📊 Commit range: ${range}`);

const commits = getCommits(range);

if (commits.length === 0) {
  console.log('⚠️ No commits found in the specified range.');

  // Create a minimal release notes file
  const minimalNotes = `# Release ${version}\n\nNo changes detected in the commit range.\n`;
  fs.writeFileSync('RELEASE_NOTES.md', minimalNotes);
  console.log('📄 Created minimal release notes due to no commits found.');
  process.exit(0);
}

console.log('📥 Get Releasing commits...');
const prs = getReleasingCommits(commits, config);

console.log('🧩 Structuring release note data...');
const { structured, prAuthors } = prepareStructuredReleaseNotes(prs, config);
console.log(`✅ Structured into ${Object.keys(structured).length} categories`);

console.log('📝 Formatting release notes...');
const notes = formatNotes(structured, version, {
  prAuthors,
  releaseContext,
  tagName,
  commitRange: range,
  ...config,
});

const releaseNotesPath = `RELEASE_NOTES.md`;
fs.writeFileSync(releaseNotesPath, notes);
console.log(`📄 Saved release notes to ${releaseNotesPath}`);

// Log summary for debugging
console.log(`📈 Release Summary:`);
console.log(`   Context: ${releaseContext}`);
console.log(`   Version: ${version}`);
console.log(`   Range: ${range}`);
console.log(`   Commits: ${commits.length}`);
console.log(`   Valid PRs: ${prs.length}`);

// ============
// Filter commits to only valid PRs
function getReleasingCommits(commits, config = {}) {
  const results = [];

  for (const commit of commits) {
    const { subject } = commit;

    if (/^Merge branch/i.test(subject)) continue;
    if (/^Merge pull request/i.test(subject)) continue;
    if (/\[skip release\]/i.test(subject) || /\[release skip\]/i.test(subject)) continue;

    const parsed = parseCommit(commit, config);

    // Skip if no authors
    if (parsed.allAuthors.length === 0) continue;

    // Skip if type is hidden (regardless of PR ID)
    const typeConfig = config.types?.[parsed.type];
    if (typeConfig?.hidden) continue;

    // Allow commits without PR ID if they have a valid type and are not hidden
    // This includes direct commits like "chore(release): update release flow"
    if (!parsed.prId && !parsed.type) continue; // Only skip if no PR ID AND no valid type

    results.push(parsed);
  }

  return results;
}
