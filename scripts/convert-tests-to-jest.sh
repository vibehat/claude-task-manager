#!/bin/bash

# Convert Vitest syntax to Jest syntax in all test files

echo "Converting test files from Vitest to Jest syntax..."

# Find all test files in lib directory
find lib -name "*.test.ts" | while read -r file; do
    echo "Converting $file"
    
    # Replace Vitest imports with Jest imports
    sed -i '' 's/import { describe, test, expect, vi, beforeEach, afterEach } from '\''vitest'\'';/import { jest } from '\''@jest\/globals'\'';/g' "$file"
    sed -i '' 's/import { describe, test, expect, vi, beforeEach } from '\''vitest'\'';/import { jest } from '\''@jest\/globals'\'';/g' "$file"
    sed -i '' 's/import { describe, test, expect, vi } from '\''vitest'\'';/import { jest } from '\''@jest\/globals'\'';/g' "$file"
    sed -i '' 's/import { describe, test, expect } from '\''vitest'\'';/\/\/ Jest globals: describe, test, expect are available/g' "$file"
    
    # Replace vi.fn() with jest.fn()
    sed -i '' 's/vi\.fn(/jest.fn(/g' "$file"
    
    # Replace vi.mocked() with jest.mocked()
    sed -i '' 's/vi\.mocked(/jest.mocked(/g' "$file"
    
    # Replace vi.spyOn() with jest.spyOn()
    sed -i '' 's/vi\.spyOn(/jest.spyOn(/g' "$file"
    
    # Replace vi.mock() with jest.mock()
    sed -i '' 's/vi\.mock(/jest.mock(/g' "$file"
    
    # Replace vi.clearAllMocks() with jest.clearAllMocks()
    sed -i '' 's/vi\.clearAllMocks(/jest.clearAllMocks(/g' "$file"
    
    # Replace vi.useFakeTimers() with jest.useFakeTimers()
    sed -i '' 's/vi\.useFakeTimers(/jest.useFakeTimers(/g' "$file"
    
    # Replace vi.useRealTimers() with jest.useRealTimers()
    sed -i '' 's/vi\.useRealTimers(/jest.useRealTimers(/g' "$file"
    
    # Replace vi.advanceTimersByTime() with jest.advanceTimersByTime()
    sed -i '' 's/vi\.advanceTimersByTime(/jest.advanceTimersByTime(/g' "$file"
    
    # Replace any remaining vi. with jest.
    sed -i '' 's/vi\./jest./g' "$file"
    
done

echo "Conversion complete!"
echo "Test files have been converted from Vitest to Jest syntax."