# MVP User Flows

## Flow A: Start From Nothing → First Handoff

1. Open Right Now → "Start new project"
2. Create first task (title + description)
3. Open Working On (auto-focus current task)
4. Add requirements/constraints → Generate context package
5. Copy package → Hand off to AI (outside app or via basic integration)

## Flow B: Plan & Implement a Task

1. Open Tasks → search and select target task
2. Add acceptance criteria, attach links
3. Switch to Working On → preview context package
4. Mark subtasks as done → move status to Done

## Flow C: Track & Refine

1. Working On shows current phase and next action
2. Update notes with clarifications
3. Adjust acceptance criteria based on feedback
4. Regenerate package (versioned) and re-share

## Flow D: PRD → Tasks via CLI

1. Add PRD at `docs/prd/main.md`
2. Run parse: POST `/api/taskmaster/cli` `{ command: "parse-prd", options: { prdPath: "docs/prd/main.md" } }`
3. List/refresh tasks via `/api/taskmaster/raw-data`
4. Set focus in Right Now (next)

## Flow E: Complexity & Reporting

1. Trigger analysis: POST `/api/taskmaster/cli` `{ command: "analyze-complexity" }`
2. Fetch report: POST `/api/taskmaster/cli` `{ command: "complexity-report" }`
3. Use insights to split tasks (expand) and reprioritize
