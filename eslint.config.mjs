import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
   baseDirectory: __dirname,
});

const eslintConfig = [
   ...compat.extends('next/core-web-vitals', 'next/typescript'),
   {
      ignores: ['lib/generated/**/*', 'libs/server/generated/**/*']
   },
   {
      rules: {
         // Strict rules for 'any' types
         '@typescript-eslint/no-explicit-any': 'error',
         '@typescript-eslint/no-unsafe-assignment': 'error',
         '@typescript-eslint/no-unsafe-member-access': 'error',
         '@typescript-eslint/no-unsafe-call': 'error',
         '@typescript-eslint/no-unsafe-return': 'error',
         '@typescript-eslint/no-unsafe-argument': 'error',
         
         // Additional type safety rules
         '@typescript-eslint/prefer-as-const': 'error',
         '@typescript-eslint/no-inferrable-types': 'error',
         '@typescript-eslint/explicit-function-return-type': 'warn',
         '@typescript-eslint/explicit-module-boundary-types': 'warn',
         
         // Prevent implicit any in function parameters
         '@typescript-eslint/no-implicit-any-catch': 'error',
      }
   }
];

export default eslintConfig;
