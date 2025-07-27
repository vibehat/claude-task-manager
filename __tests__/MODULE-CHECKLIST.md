# New Module Testing Checklist

## When Adding a New Module to `/lib/`

### ⚡ Quick Decision (30 seconds)

**Ask yourself:**

1. **Is this core business logic?** (calculations, data transformations, validation)

   - ✅ **YES** → Add 3-5 simple tests
   - ❌ **NO** → Skip or minimal testing

2. **Is this integration/external?** (APIs, databases, file systems)

   - ✅ **YES** → Test only the interface, mock externals
   - ❌ **NO** → Test business logic

3. **Is this complex/async?** (websockets, file watchers, streams)
   - ✅ **YES** → Skip unit tests, test at integration level
   - ❌ **NO** → Add simple unit tests

### 📝 Testing Steps (5 minutes max)

1. **Copy template:**

   ```bash
   cp __tests__/unit/TEMPLATE.test.ts.example __tests__/unit/your-module.test.ts
   ```

2. **Fill in the blanks:**

   - Replace `[MODULE NAME]` with your module name
   - Import your module
   - Add 3-5 simple tests

3. **Run tests:**

   ```bash
   npm test
   ```

4. **Done!** Don't overthink it.

### 🎯 Simple Test Examples by Module Type

#### **Utility Functions**

```typescript
it('should format data correctly', () => {
   const result = formatDate('2024-01-01');
   expect(result).toBe('Jan 1, 2024');
});
```

#### **Validation Functions**

```typescript
it('should validate email format', () => {
   expect(validateEmail('test@example.com')).toBe(true);
   expect(validateEmail('invalid')).toBe(false);
});
```

#### **Business Logic**

```typescript
it('should calculate total correctly', () => {
   const items = [{ price: 10 }, { price: 20 }];
   expect(calculateTotal(items)).toBe(30);
});
```

#### **API/Database Modules** (Mock Everything)

```typescript
jest.mock('axios');
it('should have required methods', () => {
   expect(typeof ApiClient.get).toBe('function');
   expect(typeof ApiClient.post).toBe('function');
});
```

### 🚫 What NOT to Test

- **Implementation details** (private methods, internal state)
- **External library behavior** (axios, database drivers)
- **Complex async flows** (unless it's core business logic)
- **Error handling edge cases** (unless they happen frequently)
- **Configuration/setup code** (usually not business logic)

### 📈 Coverage Guidelines

- **New utility modules:** Aim for 50-80% coverage
- **New business logic:** Aim for 60-90% coverage
- **New API/integration:** Aim for 20-40% coverage
- **Complex async modules:** 0-20% coverage (test at integration level)

### 🔄 Maintenance

- **If a test breaks often:** Delete it or simplify it
- **If mocking becomes complex:** Test at a higher level
- **If tests don't catch real bugs:** Remove them
- **Keep all tests under 10 lines:** Forces simplicity

Remember: **It's better to have 5 simple tests that never break than 50 complex tests that need constant maintenance.**
