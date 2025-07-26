// scripts/bump-version.js
const fs = require('fs');

const type = process.argv[2]; // patch, minor, major, prerelease
const preid = process.argv[3]; // e.g., beta, rc (used with prerelease)

if (!['patch', 'minor', 'major', 'prerelease'].includes(type)) {
    console.error(`❌ Invalid release type: ${type}. Use: patch, minor, major, or prerelease`);
    process.exit(1);
}

if (type === 'prerelease' && !preid) {
    console.error(`❌ Prerelease type requires a preid (beta, rc, etc.)`);
    process.exit(1);
}

const file = 'package.json';
const pkg = JSON.parse(fs.readFileSync(file, 'utf8'));

let newVersion;

if (type === 'prerelease') {
    // Handle prerelease versioning
    const currentVersion = pkg.version;
    const isPrerelease = currentVersion.includes('-');

    if (isPrerelease) {
        // Parse existing prerelease version
        const [baseVersion, prereleasePart] = currentVersion.split('-');
        const [currentPreid, currentPrenum] = prereleasePart.split('.');

        if (currentPreid === preid) {
            // Increment prerelease number for same preid
            const newPrenum = parseInt(currentPrenum || '0', 10) + 1;
            newVersion = `${baseVersion}-${preid}.${newPrenum}`;
        } else {
            // Different preid, start from 1
            newVersion = `${baseVersion}-${preid}.1`;
        }
    } else {
        // First prerelease for this version
        newVersion = `${currentVersion}-${preid}.1`;
    }
} else {
    // Handle regular releases (patch, minor, major)
    const currentVersion = pkg.version;
    const baseVersion = currentVersion.split('-')[0]; // Remove prerelease part if exists
    let [major, minor, patch] = baseVersion.split('.').map(Number);

    switch (type) {
        case 'major':
            major++;
            minor = 0;
            patch = 0;
            break;
        case 'minor':
            minor++;
            patch = 0;
            break;
        case 'patch':
            patch++;
            break;
        default:
            console.error(`❌ Unknown release type: ${type}`);
            process.exit(1);
    }

    newVersion = `${major}.${minor}.${patch}`;
}

pkg.version = newVersion;

// Write to package.json
fs.writeFileSync(file, JSON.stringify(pkg, null, 2) + '\n');

// Also write to VERSION file
fs.writeFileSync('VERSION', newVersion);

console.log(newVersion);
