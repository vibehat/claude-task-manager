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
      ignores: [
         'lib/generated/**/*', 
         'libs/server/generated/**/*', 
         '.next/**/*',
         'coverage/**/*', 
         '**/graphql-generated.ts',
         'libs/client/graphql-client/generated.ts',
         'libs/server/types/graphql-generated.ts',
         'prisma/migrations/**/*',
         'libs/server/prisma/generated/**/*',
         'scripts/**/*',
         '**/mock-data/**/*'
      ],
   },
   {
      languageOptions: {
         parserOptions: {
            project: './tsconfig.json',
            tsconfigRootDir: __dirname,
         },
      },
      rules: {
         // STRICT: "any" type prevention rules
         '@typescript-eslint/no-explicit-any': 'warn',

         // Strict variable and parameter rules
         '@typescript-eslint/no-unused-vars': [
            'error',
            {
               argsIgnorePattern: '^_',
               varsIgnorePattern: '^_',
               ignoreRestSiblings: true,
            },
         ],
         '@typescript-eslint/prefer-as-const': 'error',
         '@typescript-eslint/no-inferrable-types': 'error',
         '@typescript-eslint/explicit-function-return-type': 'off',
         '@typescript-eslint/explicit-module-boundary-types': 'warn',
         '@typescript-eslint/no-non-null-assertion': 'warn',

         // Safe coding practices
         '@typescript-eslint/prefer-optional-chain': 'off',
         '@typescript-eslint/prefer-nullish-coalescing': 'off',
         '@typescript-eslint/no-unnecessary-type-assertion': 'off',
         '@typescript-eslint/no-empty-interface': 'off',
         '@typescript-eslint/consistent-type-definitions': 'off',
         '@typescript-eslint/array-type': "off",

         // Import and module rules
         '@typescript-eslint/consistent-type-imports': [
            'error',
            {
               prefer: 'type-imports',
               disallowTypeAnnotations: false,
            },
         ],
         '@typescript-eslint/no-import-type-side-effects': 'error',

         // TypeScript comment restrictions with stricter requirements
         '@typescript-eslint/ban-ts-comment': [
            'error',
            {
               'ts-expect-error': 'allow-with-description',
               'ts-ignore': true,
               'ts-nocheck': true,
               'ts-check': false,
               'minimumDescriptionLength': 15,
            },
         ],

         // Additional type safety rules
         '@typescript-eslint/prefer-for-of': 'error',
         '@typescript-eslint/prefer-includes': 'error',
         '@typescript-eslint/prefer-string-starts-ends-with': 'error',
         '@typescript-eslint/no-useless-constructor': 'error',
         '@typescript-eslint/no-empty-function': 'error',

         // Additional any-catching rules
         'no-var': 'error',
         'prefer-const': 'error',
      },
   },
];

export default eslintConfig;
