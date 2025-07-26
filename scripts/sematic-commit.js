function parseStandardFormat(subject) {
   const standardPattern = /^(\w+)(?:\(([^)]+)\))?:\s+(.+?)(?:\s+\[(.*?)\])?$/i;
   const match = subject.match(standardPattern);
   if (!match) return null;

   const [, type, scopeLabel, summary] = match;
   return {
      type: type.toLowerCase(),
      scope: scopeLabel || 'general',
      summary,
   };
}

function parseFallbackFormat(subject) {
   const fallbackPattern = /^(\w+)(?:\(([^)]+)\))?:\s+(.+)$/i;
   const match = subject.match(fallbackPattern);
   if (match) {
      const [, type, scopeLabel, summary] = match;
      return {
         type: ['bug'].includes(type.toLowerCase()) ? 'fix' : type.toLowerCase(),
         scope: scopeLabel || 'general',
         summary,
      };
   }

   // last resort: guess type from prefix
   const prefix = subject.split(':')[0].split('(')[0].toLowerCase();
   const known = ['feat', 'fix', 'bug', 'hotfix', 'enhance'];
   const type = known.includes(prefix) ? (prefix === 'bug' ? 'fix' : prefix) : 'other';

   return {
      type,
      scope: 'general',
      summary: subject,
   };
}

function extractMainAuthor(authorStr) {
   const match = authorStr.match(/(.*?)\s*<(.+)>/);
   return match
      ? {
           username: match[2].split('@')[0],
           displayName: match[1],
           email: match[2],
        }
      : {
           username: '',
           displayName: authorStr,
           email: '',
        };
}

function extractCoAuthors(body) {
   const coAuthors = [];
   const coAuthorPattern = /Co-authored-by:\s*(.+?)\s*<(.+?)>/gi;
   let match;
   while ((match = coAuthorPattern.exec(body)) !== null) {
      const [, name, email] = match;
      coAuthors.push({
         username: email.split('@')[0],
         displayName: name,
         email,
      });
   }
   return coAuthors;
}

function extractPrId(subject) {
   const match = subject.match(/#(\d{3,})/);
   return match ? match[1] : null;
}

function extractTickets(subject, body, refsConfig = []) {
   const prefixPattern = refsConfig
      .map((r) => r.prefix.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'))
      .join('|');
   const ticketRegex = new RegExp(`\\b(${prefixPattern})(\\d+)\\b`, 'g');

   const ticketSet = new Set();
   for (const text of [subject, body]) {
      let match;
      while ((match = ticketRegex.exec(text)) !== null) {
         ticketSet.add(`${match[1]}${match[2]}`);
      }
   }

   const tickets = Array.from(ticketSet).map((key) => {
      const ref = refsConfig.find((r) => key.startsWith(r.prefix));
      return {
         key,
         url: ref ? `${ref.ticketBaseURL}${key}` : null,
      };
   });

   return {
      tickets,
      ticketURLs: tickets.map((t) => t.url).filter(Boolean), // backward compatible
   };
}

function cleanSummary(summary = '', prId, tickets = []) {
   // Remove [TICKET] pattern like [PD-1234]
   summary = summary.replace(/\s*\[[A-Z]+-\d+\]/g, '');

   // Remove plain ticket keys like PD-1234
   if (tickets.length > 0) {
      const ticketKeys = tickets.map((t) => t.key.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'));
      const ticketPattern = new RegExp(`\\b(?:${ticketKeys.join('|')})\\b`, 'gi');
      summary = summary.replace(ticketPattern, '');
   }

   // Remove PR references like #1234 or (#1234)
   if (prId) {
      summary = summary.replace(new RegExp(`\\(?#${prId}\\)?`, 'gi'), '');
   }

   // Remove all brackets and parentheses
   summary = summary.replace(/[\[\]()]/g, '');

   // Remove leading/trailing punctuation or symbols
   summary = summary.replace(/^[\s:~\-–—]+|[\s:~\-–—]+$/g, '');

   // Collapse multiple spaces and trim again
   summary = summary.replace(/\s{2,}/g, ' ').trim();

   // Capitalize first character
   if (summary.length > 0) {
      summary = summary.charAt(0).toUpperCase() + summary.slice(1);
   }

   return summary;
}

function parseCommit(commit, config = {}) {
   const { hash, subject, body, author } = commit;

   const mainAuthor = extractMainAuthor(author);
   const coAuthors = extractCoAuthors(body);
   const allAuthors = [mainAuthor, ...coAuthors].filter(
      (a) => !(config.ignoreUsers || []).includes(a.username)
   );

   const isSquashed = coAuthors.length > 0 || body.includes('Co-authored-by:');
   const prId = extractPrId(subject);

   const { tickets, ticketURLs } = extractTickets(subject, body, config.refs || []);
   const parsed = parseStandardFormat(subject) || parseFallbackFormat(subject);

   const summary = cleanSummary(parsed?.summary, prId, tickets);

   return {
      hash,
      rawSubject: subject,
      rawBody: body,
      type: parsed?.type,
      scope: parsed?.scope,
      summary,
      prId,
      mainTicket: tickets[0] || null, // ✅ now an object { key, url }
      ticket: tickets[0] || null, // ✅ same as mainTicket for backward compat
      tickets, // ✅ array of { key, url }
      ticketURLs, // optional: backward compatibility
      mainAuthor,
      coAuthors,
      allAuthors,
      isSquashed,
   };
}

module.exports = {
   parseCommit,
};
