#!/bin/bash
# Demo script showing the complete version flow with release notes
# Usage: ./scripts/tests/version-flow-demo.sh

set -euo pipefail

echo "🚀 PayDirection Version Flow Demo (with Release Notes)"
echo "======================================================"

# Save original version
ORIGINAL_VERSION=$(cat VERSION)
echo "📋 Original version: $ORIGINAL_VERSION"

# Function to generate and display release notes
generate_release_notes() {
    local version=$1
    local release_type=$2

    echo "📝 Generating release notes for $version ($release_type)..."

    # Generate release notes
    if node scripts/release-notes.js > /dev/null 2>&1; then
        echo "✅ Release notes generated successfully!"

        # Show first few lines of the release notes
        echo "📄 Release notes preview:"
        echo "========================"
        head -n 15 RELEASE_NOTES.md | sed 's/^/   /'
        echo "   ..."
        echo "========================"

        # Save release notes with version-specific name for demo
        cp RELEASE_NOTES.md "demo-release-notes-$version.md"
        echo "💾 Saved as: demo-release-notes-$version.md"
    else
        echo "⚠️ Release notes generation failed or no commits found"
        echo "📄 Creating placeholder release notes..."
        echo "# Release $version" > "demo-release-notes-$version.md"
        echo "" >> "demo-release-notes-$version.md"
        echo "Demo release notes for $release_type release." >> "demo-release-notes-$version.md"
    fi

    echo ""
}

echo ""
echo "🚀 Step 0: Major Beta Version (Manual - Two Approaches)"
echo "======================================================="
echo "To create a major beta version (e.g., 1.49.6 → 1.50.0-beta.1):"
echo ""
echo "🔧 Approach 1: Two-step process (RECOMMENDED)"
echo "----------------------------------------------"
echo "1. First bump to major: ./scripts/release.sh major"
echo "2. Then create beta:    ./scripts/release.sh prerelease beta"

# Demonstrate Approach 1
echo ""
echo "📋 Demonstrating Approach 1:"
echo "Step 1a: Major bump..."
MAJOR_VERSION=$(node scripts/bump-version.js major)
echo "✅ $ORIGINAL_VERSION → $MAJOR_VERSION"

echo "Step 1b: Create first beta from major..."
MAJOR_BETA=$(node scripts/bump-version.js prerelease beta)
echo "✅ $MAJOR_VERSION → $MAJOR_BETA"
generate_release_notes "$MAJOR_BETA" "major beta"

echo ""
echo "🔧 Approach 2: Manual version setting"
echo "-------------------------------------"
echo "1. Manually edit VERSION and package.json to desired major version"
echo "2. Then run: ./scripts/release.sh prerelease beta"
echo ""
echo "⚠️  Note: Approach 1 is recommended for consistency and automation"

# Reset for the regular flow demo
echo ""
echo "🔄 Resetting for regular patch-based demo..."
echo "$ORIGINAL_VERSION" > VERSION
# Reset package.json
if command -v git &> /dev/null && git rev-parse --is-inside-work-tree &> /dev/null; then
    git checkout -- package.json 2>/dev/null || echo "⚠️  Could not reset package.json"
fi

echo ""
echo "🧪 Step 1: Beta releases (auto on develop merge)"
echo "---------------------------------------------------"

# First beta
echo "Creating first beta..."
BETA1=$(node scripts/bump-version.js prerelease beta)
echo "✅ $ORIGINAL_VERSION → $BETA1"
generate_release_notes "$BETA1" "beta"

# Second beta
echo "Creating second beta..."
BETA2=$(node scripts/bump-version.js prerelease beta)
echo "✅ $BETA1 → $BETA2"
generate_release_notes "$BETA2" "beta"

echo ""
echo "🔄 Step 2: Release Candidate (manual)"
echo "-------------------------------------"

# RC release
echo "Creating release candidate..."
RC1=$(node scripts/bump-version.js prerelease rc)
echo "✅ $BETA2 → $RC1"
generate_release_notes "$RC1" "release candidate"

echo ""
echo "🚀 Step 3: Production Release (manual)"
echo "--------------------------------------"

# Production release
echo "Creating production release..."
PROD=$(node scripts/bump-version.js patch)
echo "✅ $RC1 → $PROD"
generate_release_notes "$PROD" "production"

echo ""
echo "📈 Complete Flow Summary:"
echo "========================"
echo "🔄 Major Beta Creation:"
echo "  $ORIGINAL_VERSION → $MAJOR_VERSION → $MAJOR_BETA (major beta) + release notes"
echo ""
echo "🔄 Regular Patch Flow:"
echo "  $ORIGINAL_VERSION (production)"
echo "  ↓"
echo "  $BETA1 (auto beta) + release notes"
echo "  ↓"
echo "  $BETA2 (auto beta) + release notes"
echo "  ↓"
echo "  $RC1 (manual RC) + release notes"
echo "  ↓"
echo "  $PROD (manual production) + release notes"

echo ""
echo "📁 Generated Demo Files:"
echo "========================"
for file in demo-release-notes-*.md; do
    if [ -f "$file" ]; then
        echo "  📄 $file"
    fi
done

echo ""
echo "📋 Summary of Version Creation Methods:"
echo "======================================"
echo "🔥 Major Beta:     ./scripts/release.sh major && ./scripts/release.sh prerelease beta"
echo "⚡ Minor Beta:     ./scripts/release.sh minor && ./scripts/release.sh prerelease beta"
echo "🐛 Patch Beta:     ./scripts/release.sh prerelease beta (from production)"
echo "🔄 Beta Increment: ./scripts/release.sh prerelease beta (from existing beta)"
echo "🎯 RC Creation:    ./scripts/release.sh prerelease rc (from beta)"
echo "🚀 Production:     ./scripts/release.sh patch/minor/major (from RC)"

echo ""
echo "🔄 Restoring original version..."
echo "$ORIGINAL_VERSION" > VERSION
# Reset package.json to original state
if command -v git &> /dev/null && git rev-parse --is-inside-work-tree &> /dev/null; then
    git checkout -- package.json 2>/dev/null || echo "⚠️  Could not reset package.json (not in git repo or no changes)"
fi

echo "✅ Demo complete! Version restored to: $(cat VERSION)"

echo ""
echo "🧹 Cleaning up demo files..."
rm -f demo-release-notes-*.md RELEASE_NOTES.md
echo "✅ Demo files cleaned up!"
