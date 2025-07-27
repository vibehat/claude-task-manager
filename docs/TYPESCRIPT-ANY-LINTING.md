# TypeScript `any` Type Linting Guide

This guide covers how to detect, lint, and eliminate `any` types in your TypeScript codebase for better type safety.

## 🔧 Configuration

### TypeScript Compiler Options

The following options in `tsconfig.json` help detect `any` types:

```json
{
   "compilerOptions": {
      "strict": true, // Enables all strict type checking
      "noImplicitAny": true, // Error on implicit 'any' types
      "noImplicitReturns": true, // Error when not all code paths return
      "noImplicitThis": true, // Error on implicit 'any' for 'this'
      "noUncheckedIndexedAccess": true, // Add undefined to index access types
      "exactOptionalPropertyTypes": true // Exact optional property types
   }
}
```

### ESLint Rules

Configure these ESLint rules to catch `any` types:

```javascript
{
  rules: {
    // Strict rules for 'any' types
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
    '@typescript-eslint/no-unsafe-member-access': 'error',
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-return': 'error',
    '@typescript-eslint/no-unsafe-argument': 'error',

    // Additional type safety
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
  }
}
```

## 📝 Available Commands

### 1. **Lint for `any` types**

```bash
npm run lint:any
```

### 2. **Type check without emitting files**

```bash
npm run type-check
```

### 3. **Strict type checking**

```bash
npm run type-check:strict
```

### 4. **Regular linting**

```bash
npm run lint
```

### 5. **Find all `any` types manually**

```bash
# Search for explicit 'any' usage
grep -r "any" --include="*.ts" --include="*.tsx" .

# Search for type assertions to any
grep -r "as any" --include="*.ts" --include="*.tsx" .

# Search for any in type definitions
grep -r ": any" --include="*.ts" --include="*.tsx" .
```

## 🔍 Common `any` Type Patterns to Fix

### 1. **Function Parameters**

❌ **Bad:**

```typescript
function processData(data: any) {
   return data.someProperty;
}
```

✅ **Good:**

```typescript
interface DataType {
   someProperty: string;
}

function processData(data: DataType) {
   return data.someProperty;
}

// Or use generics
function processData<T extends { someProperty: string }>(data: T) {
   return data.someProperty;
}
```

### 2. **Object Properties**

❌ **Bad:**

```typescript
interface Config {
   settings: any;
   metadata: any;
}
```

✅ **Good:**

```typescript
interface Config {
   settings: Record<string, unknown>;
   metadata: {
      version: string;
      author: string;
      [key: string]: unknown;
   };
}
```

### 3. **API Responses**

❌ **Bad:**

```typescript
async function fetchUser(): Promise<any> {
   const response = await fetch('/api/user');
   return response.json();
}
```

✅ **Good:**

```typescript
interface User {
   id: string;
   name: string;
   email: string;
}

async function fetchUser(): Promise<User> {
   const response = await fetch('/api/user');
   return response.json();
}

// Or for unknown structures
async function fetchUser(): Promise<Record<string, unknown>> {
   const response = await fetch('/api/user');
   return response.json();
}
```

### 4. **Event Handlers**

❌ **Bad:**

```typescript
function handleClick(event: any) {
   event.preventDefault();
}
```

✅ **Good:**

```typescript
function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
   event.preventDefault();
}

// For generic events
function handleClick(event: Event) {
   event.preventDefault();
}
```

### 5. **Third-party Library Types**

❌ **Bad:**

```typescript
const library: any = require('some-library');
```

✅ **Good:**

```typescript
// Install types
// npm install @types/some-library

import * as library from 'some-library';

// Or create minimal types
declare module 'some-library' {
   export function someMethod(param: string): boolean;
}
```

## 🛠️ Strategies for Eliminating `any`

### 1. **Use `unknown` instead of `any`**

```typescript
// Instead of any, use unknown for safer type handling
function processJson(json: unknown) {
   if (typeof json === 'object' && json !== null) {
      // Type narrowing required
      return (json as Record<string, unknown>).someProperty;
   }
}
```

### 2. **Use union types**

```typescript
// Instead of any for multiple possible types
type StringOrNumber = string | number;
type ApiResponse = SuccessResponse | ErrorResponse;
```

### 3. **Use generic constraints**

```typescript
// Instead of any for flexible but constrained types
function clone<T extends Record<string, unknown>>(obj: T): T {
   return { ...obj };
}
```

### 4. **Use type assertions carefully**

```typescript
// When you know the type but TypeScript doesn't
const userInput = getValue() as string;

// Better: use type guards
function isString(value: unknown): value is string {
   return typeof value === 'string';
}

const value = getValue();
if (isString(value)) {
   // TypeScript now knows value is string
   console.log(value.toUpperCase());
}
```

### 5. **Create proper interfaces**

```typescript
// Define proper interfaces for your data structures
interface DatabaseRow {
   id: number;
   createdAt: Date;
   updatedAt: Date;
   [key: string]: unknown; // For additional fields
}
```

## 🎯 Specific Fixes for This Codebase

Based on the current codebase, here are common patterns to fix:

### 1. **GraphQL Context**

```typescript
// Current (has any)
task?: any | null;

// Better
task?: Task | null;
```

### 2. **Database Relations**

```typescript
// Current
assignedIssues?: any[];

// Better
assignedIssues?: Issue[];
```

### 3. **Generic Functions**

```typescript
// Current
function transform(data: any): any;

// Better
function transform<T, R>(data: T): R;
function transform<T>(data: T): TransformedType<T>;
```

## 📊 Monitoring Progress

### Check current `any` usage:

```bash
# Count explicit any types
grep -r "\bany\b" --include="*.ts" --include="*.tsx" . | wc -l

# Find files with the most any usage
grep -r "\bany\b" --include="*.ts" --include="*.tsx" . | cut -d: -f1 | sort | uniq -c | sort -nr
```

### Pre-commit hook to prevent new `any` types:

```bash
#!/bin/sh
# Add to .husky/pre-commit
npm run lint:any
if [ $? -ne 0 ]; then
  echo "❌ Found 'any' types. Please fix them before committing."
  exit 1
fi
```

## 🏆 Best Practices

1. **Start with `unknown`** instead of `any` when you're unsure
2. **Use type guards** for runtime type checking
3. **Create interfaces** for all data structures
4. **Use generics** for reusable type-safe functions
5. **Gradually migrate** existing `any` types
6. **Use strict TypeScript settings** in new projects
7. **Add type annotations** to function parameters and return types

## 🔄 Migration Strategy

1. **Enable strict linting** (done)
2. **Fix build-breaking `any` types** first
3. **Replace `any` with `unknown`** for quick wins
4. **Create proper interfaces** for data structures
5. **Add type guards** where needed
6. **Use generics** for flexible but safe code
7. **Add tests** to verify type safety

Run `npm run lint:any` to see current issues and start fixing them one by one!
