const fs = require('fs');
const path = require('path');

// === Paths ===
const configPath = path.resolve('./release.json');
const outputPath = path.resolve('./docs/commit-reference.md');

// === Load config ===
if (!fs.existsSync(configPath)) {
  console.error('❌ release.json not found.');
  process.exit(1);
}
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

// === Helpers ===

// Roughly estimate emoji width as 2 chars (since Markdown editors misalign them)
function visualLength(str) {
  return Array.from(str).reduce((len, ch) => {
    // Estimate emoji/wide char as 2
    return len + (/\p{Extended_Pictographic}/u.test(ch) ? 2 : 1);
  }, 0);
}

// Pad string to given visual width
function pad(str, width) {
  const actual = visualLength(str);
  const padding = Math.max(0, width - actual);
  return str + ' '.repeat(padding);
}

function getColWidths(headers, rows) {
  const widths = headers.map(h => visualLength(h));
  rows.forEach(row => {
    row.forEach((cell, i) => {
      widths[i] = Math.max(widths[i], visualLength(cell));
    });
  });
  return widths;
}

function buildTable(headers, rows) {
  const colWidths = getColWidths(headers, rows);
  const buildRow = (cols) =>
    '| ' + cols.map((c, i) => pad(c, colWidths[i])).join(' | ') + ' |';
  const divider = '| ' + colWidths.map(w => '-'.repeat(w)).join(' | ') + ' |';
  return [buildRow(headers), divider, ...rows.map(buildRow)].join('\n');
}

// === Commit Type Table ===
const typeHeaders = [
  'Type',
  'Icon',
  'Label',
  'Included in Release Notes',
  'Visible to Users',
  'Description',
];

const typeRows = Object.entries(config.types).map(([type, info]) => [
  `\`${type}\``,
  info.icon || '',
  info.label || '',
  info.note ? 'Yes' : 'No',
  info.hidden ? 'No' : 'Yes',
  info.description || '',
]);

// === Scope Table ===
const scopeHeaders = ['Scope', 'Description'];
const scopeRows = Object.entries(config.scopes).map(([scope, info]) => [
  `\`${scope}\``,
  info.label || '',
]);

// === Features Table ===
const featureHeaders = ['Feature', 'Description'];
const featureRows = config.features
  ? Object.entries(config.features).map(([feature, info]) => [
      `\`${feature}\``,
      info.label || '',
    ])
  : config.labels?.features
    ? Object.entries(config.labels.features).map(([feature, info]) => [
        `\`${feature}\``,
        info.label || feature,
      ])
    : [];

// === Markdown content ===
const mdContent = `# 🔖 Commit Types & Scopes Reference

This guide defines the **commit types**, **scopes**, and **features** used in this project.
Consistent commit messages help automate release notes and improve team communication.

---

## ✍️ Allowed Commit Types

Each commit should use a predefined type that reflects the nature of the change:

${buildTable(typeHeaders, typeRows)}

> ✅ **Release Notes**: Whether this type is included in automated changelogs.
> ✅ **Visible**: Whether this type is visible to end users or stakeholders.

---

## 🧭 Allowed Scopes

Scopes help categorize commits by the technical area of the codebase affected:

${buildTable(scopeHeaders, scopeRows)}

${featureRows.length > 0 ? `---

## 🎯 Allowed Features

Features help categorize commits by the functional area or business domain affected:

${buildTable(featureHeaders, featureRows)}` : ''}
`;

// === Output ===
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, mdContent.trim() + '\n');

console.log(`✅ Commit reference generated at: ${outputPath}`);
