function prepareStructuredReleaseNotes(commits, config) {
   const structured = {};
   const typeDefs = config.types || {};
   const scopeDefs = { ...(config.scopes || {}), ...(config.features || {}) };

   for (const commit of commits) {
      const { type, scope, summary, ticket, prId, allAuthors } = commit;

      const category = typeDefs[type] ? type : 'other';
      const typeConfig = typeDefs[category];

      // Skip hidden types
      if (typeConfig?.hidden) continue;

      if (!structured[category]) {
         structured[category] = {
            note: typeConfig.note || typeConfig.label || category,
            icon: typeConfig.icon || '',
            items: [],
         };
      }

      structured[category].items.push({
         scope,
         scopeLabel: scopeDefs[scope]?.label || scope,
         summary,
         ticket, // ✅ now an object: { key, url }
         prId,
         allAuthors,
      });
   }

   return { structured };
}

function formatNotes(structured, version, config = {}) {
   const {
      authorBaseURL = '',
      repoBaseURL = '',
      repoOwner = '',
      repoName = '',
      types = {},
   } = config;

   let output = `# 📦 Release Notes - v${version}\n\n`;

   const visibleTypes = Object.entries(types)
      .filter(([_, def]) => !def.hidden)
      .map(([type, def]) => ({
         type,
         note: def.note || def.label || type,
         icon: def.icon || '',
         order: def.order || 0,
      }))
      .sort((a, b) => a.order - b.order);

   for (const typeObj of visibleTypes) {
      const { type } = typeObj;
      const section = structured[type];
      if (!section) continue;

      const { note, icon, items } = section;
      console.log(`✳️ Section: ${type} (${items.length} item${items.length > 1 ? 's' : ''})`);

      output += `## ${icon} ${note}\n`;

      for (const { scope, scopeLabel, summary, ticket, prId, allAuthors } of items) {
         let line = `- **${scopeLabel || scope}**: ${summary}`;

         // Ticket link
         if (ticket?.key) {
            const ticketLink = ticket.url ? `[#${ticket.key}](${ticket.url})` : `#${ticket.key}`;
            line += ` (${ticketLink})`;
         }

         // PR link
         if (prId) {
            const prLink = repoBaseURL
               ? `[#${prId}](${repoBaseURL}/pull/${prId})`
               : repoOwner && repoName
                 ? `[#${prId}](https://github.com/${repoOwner}/${repoName}/pull/${prId})`
                 : `#${prId}`;
            line += ` (${prLink})`;
         }

         // Authors
         if (allAuthors?.length) {
            const links = allAuthors
               .filter((a) => a.username)
               .map((a) =>
                  authorBaseURL
                     ? `[@${a.username}](${authorBaseURL}/${a.username})`
                     : `@${a.username}`
               );
            if (links.length > 0) {
               line += ` (by ${links.join(', ')})`;
            }
         }

         output += `${line}\n`;
      }

      output += '\n';
   }

   return output;
}

module.exports = {
   prepareStructuredReleaseNotes,
   formatNotes,
};
