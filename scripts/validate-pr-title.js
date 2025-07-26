// validate-pr-title.js
const fs = require('fs');
const path = require('path');

// Load config
const configPath = path.resolve('release.json');
if (!fs.existsSync(configPath)) {
  console.error('❌ release.json not found.');
  process.exit(1);
}
const config = JSON.parse(fs.readFileSync(configPath));
console.log('✅ Config loaded.');

function getAllowedTypes(config) {
  return Object.keys(config.types || {});
}

function getAllowedScopes(config) {
  // Combine both scopes and features for validation
  const scopes = Object.keys(config.scopes || {});
  const features = Object.keys(config.labels?.features || {});
  return [...scopes, ...features.map(f => f.toLowerCase())];
}

function extractTickets(summary, refs) {
  const ticketPatterns = refs.map(ref => `${ref.prefix}\\d+`);
  const ticketRegex = new RegExp(`\\b(${ticketPatterns.join('|')})\\b`, 'gi');
  return [...summary.matchAll(ticketRegex)].map(match => match[1]);
}

function parseStandardFormat(subject) {
  const standardPattern = /^(\w+)(?:\(([^)]+)\))?:\s+(.+)$/;
  const match = subject.match(standardPattern);
  if (!match) return null;

  const [, type, scopeLabel, summary] = match;
  return {
    type: type.toLowerCase(),
    scope: (scopeLabel || 'general').toLowerCase(),
    summary: summary.trim(),
  };
}

function validatePRTitle(title, config) {
  const parsed = parseStandardFormat(title);
  if (!parsed) {
    console.error('❌ Invalid format. Expected: <type>(<scope>): <summary>');
    return false;
  }

  const { type, scope, summary } = parsed;
  const allowedTypes = getAllowedTypes(config);
  const allowedScopes = getAllowedScopes(config);

  if (!allowedTypes.includes(type)) {
    console.error(`❌ Invalid type: "${type}". Allowed types: ${allowedTypes.join(', ')}`);
    return false;
  }

  if (!allowedScopes.includes(scope)) {
    console.error(`❌ Invalid scope: "${scope}". Allowed scopes: ${allowedScopes.join(', ')}`);
    return false;
  }

  const tickets = extractTickets(summary, config.refs || []);
  if (tickets.length > 0) {
    console.log(`✅ Found ticket(s): ${tickets.join(', ')}`);
  } else {
    console.log(`ℹ️ No ticket ID found – allowed, but recommended.`);
  }

  console.log('✅ PR title is valid.');
  return true;
}

// CLI usage
const title = process.argv[2];
if (!title) {
  console.error('Usage: node validate-pr-title.js "type(scope): Summary [TICKET]"');
  process.exit(1);
}

const valid = validatePRTitle(title, config);
if (!valid) process.exit(1);
