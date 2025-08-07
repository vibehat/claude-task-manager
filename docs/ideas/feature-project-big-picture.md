# Project Overview > Big Picture - Feature Design Notes

## Overview

The Big Picture page provides developers with an immediate, emotionally satisfying understanding of their entire project state. It eliminates the "what should I work on?" paralysis and preserves critical context across sessions.

## Core Value Propositions

- **Instant Orientation**: Understand project state in <5 seconds
- **Context Preservation**: Never lose critical decisions and learnings
- **Emotional Connection**: Feel progress and momentum visually
- **Trust in Documentation**: Know docs match implementation reality
- **Git Intelligence**: Leverage version control history for automatic insights

## 🎯 Priority 1: Essential Features

### 1. Project Journey Timeline (Git-Enhanced)

**Purpose**: Show project evolution from inception → current → future with Git activity

**Visual Design**:

```
Past ←━━━━━━━━━━[● You Are Here]━━━━━━━━━━→ Future
     Research    PRD    MVP   Sprint 12   Beta   Launch
        ✓        ✓      ✓    (active)
     500 commits  823   1.2k   current
     [▁▃▅▇▅▃▁] [▇▇▅▃] [▅▇▇▇▅] [▇▅▃▁]  (commit heatmap)
```

**Key Elements**:

- Horizontal timeline with milestone markers
- Pulsing "You Are Here" indicator showing current sprint/phase
- Completed phases glow with warm satisfaction color
- Upcoming milestones fade gradually (progressive disclosure)
- Hover reveals key decisions/learnings at each point
- Auto-scrolls to current position on load

**Git-Powered Enhancements**:

- **Commit Density Heatmap**: Visual bars showing development intensity
- **Commit Count**: Total commits per phase/milestone
- **Tag Milestones**: Git tags (v0.1, v1.0-beta) as timeline markers
- **Crisis Detection**: Red indicators for hotfixes/3am commits
- **Branch Merge Points**: Major feature integrations marked

**Implementation Notes**:

- Pull milestone data from task phases/tags AND git tags
- Calculate position based on task completion % and commit frequency
- Store key decisions in task metadata and extract from commit messages
- Git data: `git log --pretty=format:'%h|%ad|%s' --date=iso`

### 2. Smart Dependency Constellation

**Purpose**: Instantly see what's blocking what, what's ready now

**Visual Design**:

- Interactive node graph with tasks as glowing orbs
- Dependency lines connect related tasks
- Visual states:
  - 🟢 Ready to work (unblocked, glowing invitingly)
  - 🟡 In progress (gentle pulse animation)
  - 🔴 Blocked (dim with red indicator)
  - ✨ Just completed (celebration sparkle)

**Key Features**:

- Zoom in/out for detail vs overview
- Click node to see task details
- Filter by status/assignee/priority
- Auto-highlight critical path
- Show team member avatars on assigned tasks

**Data Requirements**:

- Task dependencies from tasks.json
- Real-time status updates
- Team assignments (if applicable)

### 3. Living Documentation Status Widget (Git-Aware)

**Purpose**: Build trust that docs match implementation using Git tracking

**Visual Design**:

```
📚 Documentation Health (Git-Tracked)
├─ API Docs ✅ In sync (last code change: 2h ago)
├─ Architecture 🟡 3 commits behind (src/core/* modified)
├─ Setup Guide ✅ Current (no setup files changed)
└─ PRD 🔄 Evolving (5 requirement updates this sprint)

Auto-detected drift:
• payment.md outdated - payment.ts changed 3 days ago
• auth.md needs update - 5 auth/* files modified
```

**Smart Features**:

- Auto-detect when code changes affect docs using Git diff
- One-click to relevant doc for current task
- "Freshness" algorithm based on:
  - Git history of related code files
  - Compare doc vs code last modified dates
  - Task completion affecting specs
  - Commit messages mentioning docs
- Green/yellow/red health indicators
- Direct links to doc sections

**Git-Based Detection**:

```javascript
// Detect documentation drift
const docLastModified = git.getFileLastModified('docs/api.md');
const codeFiles = git.getRelatedFiles('src/api/*');
const driftDays = calculateDrift(docLastModified, codeFiles);
```

### 4. Context Memory Palace (Git-Enriched)

**Purpose**: Preserve critical decisions and learnings extracted from Git history

**Visual Design**:

```
🧠 Project Memory (Auto-extracted from Git)
┌─────────────────────────────────────┐
│ Recent Decisions (semantic commits) │
│ • feat(auth): switch to WebSockets  │
│   SHA: abc123, Impact: 15 files     │
│ • refactor(db): add Redis caching   │
│   SHA: def456, Impact: 8 files      │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Pivotal Moments (Git patterns)      │
│ • refactor: Major refactor 3w ago   │
│   200+ files changed in 2 days      │
│ • fix: Crisis resolved 10d ago      │
│   Hotfix at 3:47 AM, 5 commits      │
│ • feat(breaking): API v2 migration  │
│   Breaking change, 45 files         │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Quality Patterns (semantic data)    │
│ • fix(auth): 12 occurrences         │
│   Pattern: Authentication stability │
│ • test: Low coverage trend          │
│   Action: Increase testing efforts  │
│ • docs: Good coverage (85% feat)    │
│   Strength: Documentation hygiene   │
└─────────────────────────────────────┘
```

**Semantic Content Sources**:

- Extract from task update notes
- Parse PR descriptions with semantic structure
- AI-identified patterns from commit types and scopes
- Manual "decision" markers
- **Semantic Mining**: Type-aware keyword extraction (feat:switch, refactor:migrate)
- **Crisis Detection**: Late-night fixes, revert patterns
- **Quality Analysis**: Fix/feat ratios, test coverage trends

## 🎨 Priority 2: Enhancement Features

### 5. Project Heatmap (Activity-Based)

**Purpose**: Visual representation of active development areas to identify feature focus

**Visual Design**:

```
📂 Project Structure (Development Activity Heatmap)
src/
├─ 🔥 features/
│  ├─ 🔴 auth/ (25 changes, 7d) ← Very Active
│  ├─ 🟠 payments/ (12 changes, 14d) ← Active
│  ├─ 🟡 dashboard/ (3 changes, 30d) ← Moderate
│  └─ ⚪ archive/ (0 changes, 180d) ← Dormant
├─ 🟠 components/
│  ├─ 🔴 TaskCard.tsx (8 changes, 3d)
│  └─ 🟡 Layout.tsx (2 changes, 45d)
└─ ⚪ utils/ (1 change, 90d)

Heat Scale: ⚪ Dormant → 🟡 Moderate → 🟠 Active → 🔴 Very Active → 🔥 Critical

🏷️ Semantic Commit Types:
feat: 🚀 | fix: 🔧 | docs: 📚 | style: 💄 | refactor: ♻️ | test: 🧪 | chore: 🔨
```

**Activity Score Algorithm** (Semantic-Enhanced):

```javascript
const calculateActivityScore = (path) => {
  const commits = getSemanticCommits(path, '30 days');
  const recency = getDaysSinceLastChange(path);
  const impact = getLinesChanged(path, '30 days');

  // Weighted scoring by commit type
  const typeWeights = {
    feat: 15, // New features = highest weight
    fix: 12, // Bug fixes = high urgency
    refactor: 8, // Code improvements
    docs: 5, // Documentation updates
    test: 7, // Test additions
    style: 3, // Formatting only
    chore: 4, // Maintenance
    perf: 10, // Performance improvements
    ci: 3, // CI/CD changes
    build: 4, // Build system changes
  };

  let semanticScore = 0;
  for (const [type, count] of Object.entries(commits.byType)) {
    semanticScore += (typeWeights[type] || 5) * count;
  }

  return semanticScore + impact / 10 - recency * 0.5;
};

// Heat levels (adjusted for semantic weighting):
// 🔥 Critical: Score > 150 (intense feature development)
// 🔴 Very Active: Score 75-150 (active development)
// 🟠 Active: Score 30-75 (regular changes)
// 🟡 Moderate: Score 10-30 (light activity)
// ⚪ Dormant: Score < 10 (minimal/no changes)
```

**Semantic-Powered Insights**:

- **Development Type Analysis**: "🚀 `/auth/` has 15 feat commits - major feature development"
- **Quality Focus**: "🔧 `/payments/` has 8 fix commits - stability issues detected"
- **Documentation Health**: "📚 `/api/` docs lag behind 12 feat commits - needs update"
- **Refactor Cycles**: "♻️ `/core/` refactoring active - architecture evolution"
- **Test Coverage**: "🧪 `/auth/` has 0 test commits vs 15 feat - testing gap"
- **Release Readiness**: "🏷️ Last release: 45 feat, 23 fix commits - ready for next version"
- **Team Focus Breakdown**: "67% feat, 23% fix, 10% other - feature-heavy sprint"

**Interactive Features**:

- Click folder → See related tasks and semantic commit breakdown
- Hover → Show activity details (commit types, authors, timeframe)
- Filter → By commit type (feat, fix, docs, etc.) or activity level
- Timeline scrub → See how heatmap and commit types evolved
- **Commit Type Filter**: Toggle visibility by semantic type
- **Pattern Detection**: Identify fix-heavy areas needing attention

**Implementation Data Sources** (Semantic-Aware):

```bash
# Get semantic commits by directory and type
git log --since="30 days ago" --pretty=format:"%s|%H|%ad" --date=short --name-only | \
  grep -E "^(feat|fix|docs|style|refactor|test|chore|perf|ci|build)" | \
  awk -F'|' '{print $1 "|" $2 "|" $3}'

# Semantic commit type breakdown by file/directory
git log --since="30 days ago" --pretty=format:"%s" --name-only | \
  awk '/^(feat|fix|docs|style|refactor|test|chore|perf|ci|build):/ {
    type = substr($1, 1, index($1, ":")-1)
    getline file
    while(file != "" && file !~ /^(feat|fix|docs)/) {
      print type "|" file
      getline file
    }
  }'

# Release analysis - commits since last tag
git log $(git describe --tags --abbrev=0)..HEAD --pretty=format:"%s" | \
  grep -E "^(feat|fix|docs|style|refactor|test|chore|perf|ci|build):" | \
  cut -d':' -f1 | sort | uniq -c

# Scope analysis (if using conventional commits with scope)
git log --since="30 days ago" --pretty=format:"%s" | \
  grep -E "^[a-z]+(\([^)]+\)):" | \
  sed -E 's/^([a-z]+)\(([^)]+)\):.*/\1|\2/' | \
  sort | uniq -c

# Quality indicators - fix vs feat ratio by area
git log --since="30 days ago" --pretty=format:"%s" --name-only | \
  awk '/^(feat|fix):/ {
    type = substr($1, 1, index($1, ":")-1)
    getline file
    if(file) area_types[file][type]++
  }
  END {
    for(file in area_types) {
      feat = area_types[file]["feat"] || 0
      fix = area_types[file]["fix"] || 0
      printf "%s|feat:%d|fix:%d|ratio:%.2f\n", file, feat, fix, (fix/(feat+fix))
    }
  }'
```

**Task Correlation Algorithm** (Semantic-Enhanced):

```javascript
const correlateSemanticHeatmapToTasks = (heatmapData, tasks) => {
  const correlations = [];

  for (const [path, activity] of heatmapData) {
    const relatedTasks = tasks.filter(
      (task) =>
        task.details?.includes(path) ||
        task.title.toLowerCase().includes(path.split('/').pop()) ||
        hasKeywordMatch(task, path)
    );

    const semanticInsight = analyzeSemanticPatterns(activity.commits);

    correlations.push({
      path,
      activity,
      semanticBreakdown: activity.commits.byType,
      relatedTasks: relatedTasks.length,
      taskIds: relatedTasks.map((t) => t.id),
      insight: generateSemanticInsight(path, activity, relatedTasks, semanticInsight),
    });
  }

  return correlations;
};

const analyzeSemanticPatterns = (commits) => {
  const { feat = 0, fix = 0, docs = 0, test = 0 } = commits.byType;
  const total = Object.values(commits.byType).reduce((a, b) => a + b, 0);

  return {
    developmentType: feat > fix ? 'feature-heavy' : fix > feat ? 'maintenance-heavy' : 'balanced',
    fixRatio: fix / (feat + fix) || 0,
    docsCoverage: docs / feat || 0,
    testCoverage: test / feat || 0,
    qualityScore: (test + docs) / (feat + fix) || 0,
    riskLevel: fix / total > 0.4 ? 'high' : fix / total > 0.2 ? 'medium' : 'low',
  };
};

const generateSemanticInsight = (path, activity, tasks, patterns) => {
  const insights = [];

  // Development pattern insights
  if (patterns.developmentType === 'feature-heavy') {
    insights.push(`🚀 Active feature development in ${path}`);
  } else if (patterns.developmentType === 'maintenance-heavy') {
    insights.push(`🔧 High maintenance activity in ${path} - stability focus`);
  }

  // Quality insights
  if (patterns.fixRatio > 0.4) {
    insights.push(`⚠️ High fix ratio (${(patterns.fixRatio * 100).toFixed(0)}%) - quality issues`);
  }

  if (patterns.testCoverage < 0.2 && activity.commits.byType.feat > 5) {
    insights.push(
      `🧪 Testing gap: ${activity.commits.byType.feat} features, ${activity.commits.byType.test || 0} tests`
    );
  }

  if (patterns.docsCoverage < 0.1 && activity.commits.byType.feat > 3) {
    insights.push(`📚 Documentation lag: ${activity.commits.byType.feat} features need docs`);
  }

  // Task alignment
  if (activity.level === 'critical' && tasks.length === 0) {
    insights.push(`📋 No tasks found for high-activity area`);
  } else if (tasks.length > 0) {
    insights.push(`✅ ${tasks.length} tasks align with activity`);
  }

  return insights.join(' • ');
};

// Semantic commit parser
const parseSemanticCommits = (commits) => {
  const byType = {};
  const byScope = {};
  const patterns = [];

  commits.forEach((commit) => {
    const match = commit.message.match(/^([a-z]+)(\(([^)]+)\))?: (.+)/);
    if (match) {
      const [, type, , scope, description] = match;
      byType[type] = (byType[type] || 0) + 1;
      if (scope) byScope[scope] = (byScope[scope] || 0) + 1;

      // Detect patterns
      if (description.includes('breaking change')) patterns.push('breaking');
      if (description.includes('WIP') || description.includes('wip')) patterns.push('wip');
    }
  });

  return { byType, byScope, patterns };
};
```

### 6. Git Activity Intelligence Dashboard

**Purpose**: Derive project insights from Git history automatically

**Visual Components**:

#### Commit Velocity & Patterns

```
📊 Development Velocity (Last 30 days)
Mon ████████░░ 8 commits
Tue ██████████ 10 commits
Wed ████░░░░░░ 4 commits
Thu ███████░░░ 7 commits
Fri ██████░░░░ 6 commits
Sat ██░░░░░░░░ 2 commits
Sun ░░░░░░░░░░ 0 commits

Peak hours: 10am-12pm, 2pm-5pm
Average: 6.3 commits/day
```

#### Code Churn Analysis

```
📈 File Stability (Hot vs Stable)
Hot files (changed >10x this week):
  • src/api/auth.ts (15 changes) ⚠️
  • components/TaskCard.tsx (12) ⚠️
Stable foundations (unchanged 30d):
  • src/core/database.ts ✅
  • src/utils/helpers.ts ✅
```

#### Branch Health Monitor

```
🌳 Active Branches
├─ feature/payments (45 commits ahead) ✅
├─ fix/auth-redirect ⚠️ Stale 48h
└─ experiment/new-ui ⚠️ 89 behind main
```

#### Semantic Commit Intelligence

```
📊 Commit Type Breakdown (Last 30 days)
feat: ████████████████████ 45 commits (60%) 🚀
fix:  ████████████ 23 commits (30%) 🔧
docs: ████ 5 commits (7%) 📚
test: ██ 2 commits (3%) 🧪

🎯 Development Focus: Feature-heavy sprint
📈 Quality Metrics:
  • Fix ratio: 30% (healthy < 40%)
  • Test coverage: 4% (low - consider more testing)
  • Doc coverage: 11% (good)

⚠️ Quality Alerts:
  • auth/ module: 60% fix commits (stability issues)
  • payments/ module: 0 test commits for 8 features

🏷️ Scope Analysis:
  • auth: 15 commits (most active)
  • payments: 12 commits
  • ui: 8 commits
  • api: 6 commits
```

#### Release Readiness Indicator

```
🚀 Release Pipeline Status (since v1.2.0)
├─ 🟢 Features: 23 feat commits ready
├─ 🟡 Fixes: 12 fix commits (review recommended)
├─ 🟢 Docs: Updated for 80% of features
└─ 🔴 Tests: Only 15% feature coverage

Suggested release type: Minor (1.3.0)
Breaking changes detected: 2 commits marked as breaking
```

### 6. Progress & Momentum Dashboard

**Purpose**: Emotional satisfaction from visible progress

**Visual Components**:

- **Velocity Graph**: 30-day rolling task completion trend
- **Feature Progress Rings**: Circular progress for major features
- **Sprint Burndown**: Current sprint progress
- **Celebration Moments**: Recent wins highlighted
- **Git Activity Correlation**: Task completion vs commit frequency

### 7. Project Health Pulse

**Purpose**: At-a-glance project vitals

**Health Indicators**:

- Documentation freshness (green/yellow/red)
- Task staleness (tasks not updated >7 days)
- Dependency health (circular deps, conflicts)
- Test coverage trend
- Build status
- Team activity level
- **Git Health**: Branch drift, merge conflicts, commit frequency

## 📐 Layout & Information Architecture

### Responsive Grid Layout

```
Desktop (1920px):
┌──────────────────────────────────────────────┐
│            Project Journey Timeline          │
└──────────────────────────────────────────────┘
┌─────────────┬─────────────┬─────────────────┐
│   Project   │ Dependencies │  Git Activity   │
│   Heatmap   │ Constellation│   Dashboard     │
└─────────────┴─────────────┴─────────────────┘
┌──────────────────────────────────────────────┐
│         Context Memory & Decisions           │
└──────────────────────────────────────────────┘

Mobile (375px):
- Stack vertically
- Heatmap becomes expandable tree view
- Constellation becomes list view
- Timeline scrolls horizontally
```

### Progressive Disclosure Strategy

1. **Initial Load**: Show only current state + next action
2. **On Hover**: Reveal additional context
3. **On Click**: Expand for full details
4. **Settings**: Allow customization of visible widgets

## 🚀 Implementation Approach

### Phase 1: MVP with Basic Git (Week 1)

- [ ] Project Journey Timeline with commit counts
- [ ] Basic dependency list (not constellation yet)
- [ ] Simple progress metrics
- [ ] Current branch display
- [ ] Basic commit velocity graph

### Phase 2: Interactive & Git-Smart (Week 2)

- [ ] Interactive dependency constellation
- [ ] Living documentation status with Git tracking
- [ ] Context memory display with commit extraction
- [ ] Hot file detection
- [ ] Branch health monitoring

### Phase 3: Advanced Intelligence (Week 3)

- [ ] Smart health indicators
- [ ] AI-powered insights from Git patterns
- [ ] Predictive bottleneck warnings
- [ ] Crisis detection from commit patterns
- [ ] Automated retrospectives from Git data

## 📊 Success Metrics

### User Experience

- Time to understand project state: <5 seconds
- Clicks to find next task: ≤2
- Documentation trust score: >90%
- User satisfaction: "Can't work without it"

### Git Intelligence Value

- Insights discovered per week: >5 actionable items
- Documentation drift caught: 100% within 48 hours
- Pattern recognition accuracy: >85%
- Time saved on project understanding: 15 min/day

### Technical Performance

- Page load time: <2 seconds
- Real-time updates: <100ms latency
- Smooth animations: 60fps
- Mobile responsive: 100% feature parity
- Git data processing: <500ms for 1000 commits

## 🎨 Visual Design Principles

### Color Psychology

- **Green**: Ready, healthy, go
- **Blue**: Information, calm, stable
- **Yellow/Amber**: Attention needed, warning
- **Red**: Blocked, critical, stop
- **Purple**: AI-suggested, smart features
- **Warm glow**: Completed, celebration

### Animation Guidelines

- Subtle pulses for active items (0.5-1s duration)
- Smooth transitions (200-300ms)
- Celebration particles for completions
- No animation option for accessibility

### Typography Hierarchy

1. **Project Name**: Display font, largest
2. **Section Headers**: Bold, medium
3. **Metrics**: Monospace for numbers
4. **Descriptions**: Regular, readable

## 🔗 Integration Points

### Data Sources

- `.taskmaster/tasks/tasks.json` - Core task data
- `docs/` - Documentation files
- **Git history** - Commits, branches, tags, file changes
- WebSocket - Real-time updates
- AI Context - Smart insights

### Git Data Extraction Commands

```bash
# Commit velocity over time
git log --since="30 days ago" --pretty=format:'%ad' --date=short | sort | uniq -c

# File change frequency (hot files)
git log --since="30 days ago" --name-only --pretty=format: | sort | uniq -c | sort -rn

# Author contributions
git shortlog -sn --since="30 days ago"

# Branch status
git for-each-ref --format='%(refname:short) %(committerdate:relative)' refs/heads/

# Find decisions in commits
git log --grep="decided\|chose\|switched" --oneline

# Detect crisis moments (late night commits)
git log --since="90 days ago" --pretty=format:'%ad %s' --date=iso | grep -E '0[0-4]:[0-9]{2}:[0-9]{2}'

# Code complexity evolution
git log --numstat --pretty="%H" | awk 'NF==3 {plus+=$1; minus+=$2} END {print "+" plus " -" minus}'
```

### Connected Features

- **Right Now Dashboard** - Current task focus
- **My Work** - Detailed task management
- **Notes & Docs** - Documentation system
- **AI Helper** - Context-aware assistance

## 💡 Future Enhancements

### Advanced Visualizations

- 3D project space navigation
- AR/VR project walkthrough
- Time-lapse project evolution from Git history
- Multi-project portfolio view
- Contribution river visualization

### Git-Powered AI Intelligence

- Predictive completion dates based on velocity
- Bottleneck prevention from commit patterns
- Auto-generated status reports from Git activity
- Smart resource recommendations
- Technical debt accumulation tracking
- Team collaboration patterns from co-authored commits

### Enhanced Git Analytics

- PR review cycle analysis
- CI/CD success correlation with commits
- Issue tracking integration
- Code review patterns and efficiency
- Release prediction ML models

### Team Features

- Real-time collaboration cursors
- Team member availability/timezone
- Workload distribution view
- Knowledge transfer tracking
- Contribution patterns and expertise mapping

## 📝 Design Decisions Log

### Why Timeline Over Calendar?

- Developers think in sprints/phases, not dates
- Reduces time pressure anxiety
- Focuses on progress, not deadlines
- More flexible for changing timelines

### Why Constellation Over List?

- Visual pattern recognition faster than reading
- Shows relationships intuitively
- Satisfying to see connections
- Memorable spatial positioning

### Why "You Are Here" Messaging?

- Creates emotional connection
- Reduces cognitive load
- Familiar navigation metaphor
- Immediate orientation

---

_Last Updated: [Auto-timestamp]_
_Status: In Design Phase_
_Next Steps: Create interactive prototype with Git integration_
_Key Innovation: Leveraging Git as primary source of project intelligence_
