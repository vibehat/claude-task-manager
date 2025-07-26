#!/bin/bash
set -euo pipefail

RELEASE_TYPE=${1:-patch}
PREID=${2:-}

# Validate release type
if [[ "$RELEASE_TYPE" != "major" && "$RELEASE_TYPE" != "minor" && "$RELEASE_TYPE" != "patch" && "$RELEASE_TYPE" != "prerelease" ]]; then
  echo "❌ Invalid release type: $RELEASE_TYPE. Use: major, minor, patch, or prerelease."
  exit 1
fi

# Validate preid for prerelease
if [[ "$RELEASE_TYPE" == "prerelease" && -z "$PREID" ]]; then
  echo "❌ Prerelease type requires a preid (beta, rc, etc.). Usage: ./release.sh prerelease beta"
  exit 1
fi

if [[ -f VERSION ]]; then
  CURRENT_VERSION=$(cat VERSION)
else
  echo "❗ VERSION file not found. Please make sure it exists before running this script."
  exit 1
fi

echo "🔎 Current version: $CURRENT_VERSION"

# Bump version (script updates package.json and writes new version to VERSION)
if [[ "$RELEASE_TYPE" == "prerelease" ]]; then
  NEW_VERSION=$(node scripts/bump-version.js "$RELEASE_TYPE" "$PREID")
else
  NEW_VERSION=$(node scripts/bump-version.js "$RELEASE_TYPE")
fi

echo "$NEW_VERSION" > VERSION

echo "✅ Bumped version: $CURRENT_VERSION → $NEW_VERSION"
