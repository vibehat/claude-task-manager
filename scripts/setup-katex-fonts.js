#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const katexFontsPath = path.join(__dirname, '..', 'node_modules', '.pnpm', 'katex@0.16.22', 'node_modules', 'katex', 'dist', 'fonts');
const milkdownCrepe = path.join(__dirname, '..', 'node_modules', '.pnpm', '@milkdown+crepe@7.15.2_prosemirror-model@1.25.2_prosemirror-state@1.4.3_prosemirror-view@1.40.1_typescript@5.7.3', 'node_modules', '@milkdown', 'crepe', 'lib', 'theme', 'common', 'fonts');

try {
  // Check if KaTeX fonts exist
  if (!fs.existsSync(katexFontsPath)) {
    console.log('KaTeX fonts not found, skipping font setup');
    process.exit(0);
  }

  // Create fonts directory if it doesn't exist
  if (!fs.existsSync(milkdownCrepe)) {
    fs.mkdirSync(milkdownCrepe, { recursive: true });
  }

  // Copy all fonts
  const files = fs.readdirSync(katexFontsPath);
  files.forEach(file => {
    const src = path.join(katexFontsPath, file);
    const dest = path.join(milkdownCrepe, file);
    fs.copyFileSync(src, dest);
  });

  console.log('KaTeX fonts copied successfully to Milkdown Crepe package');
} catch (error) {
  console.warn('Failed to copy KaTeX fonts:', error.message);
}