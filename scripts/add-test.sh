#!/bin/bash

# Simple script to add a new test file
# Usage: ./scripts/add-test.sh my-module

if [ -z "$1" ]; then
  echo "Usage: ./scripts/add-test.sh <module-name>"
  echo "Example: ./scripts/add-test.sh auth-functions"
  exit 1
fi

MODULE_NAME="$1"

# Handle subdirectories (e.g., types/validation)
if [[ "$MODULE_NAME" == *"/"* ]]; then
  # Create subdirectory if it doesn't exist
  TEST_DIR="__tests__/unit/$(dirname "$MODULE_NAME")"
  mkdir -p "$TEST_DIR"
fi

TEST_FILE="__tests__/unit/${MODULE_NAME}.test.ts"

if [ -f "$TEST_FILE" ]; then
  echo "❌ Test file already exists: $TEST_FILE"
  exit 1
fi

# Copy template and replace placeholders
cp __tests__/unit/TEMPLATE.test.ts.example "$TEST_FILE"

# Replace template placeholders (escape slashes for sed)
ESCAPED_MODULE_NAME=$(echo "$MODULE_NAME" | sed 's/\//\\\//g')

if [[ "$OSTYPE" == "darwin"* ]]; then
  # macOS
  sed -i '' "s/your-module/${ESCAPED_MODULE_NAME}/g" "$TEST_FILE"
else
  # Linux
  sed -i "s/your-module/${ESCAPED_MODULE_NAME}/g" "$TEST_FILE"
fi

echo "✅ Created test file: $TEST_FILE"
echo ""
echo "Next steps:"
echo "1. Edit $TEST_FILE"
echo "2. Update imports and test cases"
echo "3. Run: pnpm test"
echo ""
echo "Remember: Keep tests simple and focused on core functionality!"