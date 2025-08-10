# My Best Workflow for Working with Claude Code

After experimenting with Claude for coding, I finally settled on a workflow that keeps my system clean and makes Claude super reliable. When I ask Claude to plan something (for example, design a feature or refactor some code), I follow up with the template below.

### Key Takeaways

- Prioritize reuse over creation; extend existing code and avoid duplicates.
- Require explicit compliance confirmation and step-by-step execution.
- Reference specific existing files in every suggestion.
- Forbid new files and rewrites unless exhaustively justified.
- Add validation checkpoints and end with a final compliance check.
- Use a preliminary codebase analysis (I use Gemini) before planning; review the plan afterward.

---

### Workflow Template

#### 📋 Step 1: Read Requirements

Claude, read the rules in `CLAUDE.md`, then use sequential thinking and proceed to the next step.

STOP — Before reading further, confirm you understand:

1. This is a code reuse and consolidation project
2. Creating new files requires exhaustive justification
3. Every suggestion must reference existing code
4. Violations of these rules make your response invalid

Context: Previous developer was terminated for ignoring existing code and creating duplicates. You must prove you can work within the existing architecture.

Mandatory process:

1. Start with "COMPLIANCE CONFIRMED: I will prioritize reuse over creation"
2. Analyze existing code BEFORE suggesting anything new
3. Reference specific files from the provided analysis
4. Include validation checkpoints throughout your response
5. End with compliance confirmation

Rules (violating ANY invalidates your response):

- ❌ No new files without exhaustive reuse analysis
- ❌ No rewrites when refactoring is possible
- ❌ No generic advice — provide specific implementations
- ❌ No ignoring existing codebase architecture
- ✅ Extend existing services and components
- ✅ Consolidate duplicate code
- ✅ Reference specific file paths
- ✅ Provide migration strategies

[Your detailed prompt here]

Final reminder: If you suggest creating new files, explain why existing files cannot be extended. If you recommend rewrites, justify why refactoring won't work.

#### 🔍 Step 2: Analyze Current System

Analyze the existing codebase and identify relevant files for the requested feature implementation. Then proceed to Step 3.

#### 🎯 Step 3: Create Implementation Plan

Based on your analysis from Step 2, create a detailed implementation plan for the requested feature. Then proceed to Step 4.

#### 🔧 Step 4: Provide Technical Details

Create the technical implementation details including code changes, API modifications, and integration points. Then proceed to Step 5.

#### ✅ Step 5: Finalize Deliverables

Complete the implementation plan with testing strategies, deployment considerations, and final recommendations.

---

### Instructions

Follow each step sequentially. Complete one step before moving to the next. Use the findings from each previous step to inform the next step.

Since I started explicitly adding this instruction, Claude has stopped hallucinating files or messing up my folder structure. It’s now more like having a thoughtful coworker rather than a chaotic intern. In `CLAUDE.md`, I also include the rules and the command to the specific prompt I’m trying to solve.

For my case, the rules are:

Never create new files that don’t already exist.

Never make up things that aren’t part of my actual project.

Never skip or ignore my existing system.

Only work with the files and structure that already exist.

Be precise and respectful of the current codebase.

The most important step for me is that I first ask Gemini to analyze the codebase, list the relevant files, and identify any problems before jumping into planning with Claude. After planning with Claude, I then ask Gemini to analyze the plan and provide insights or improvement ideas.

This workflow works really well for me when adding features. I’m open to more suggestions if anyone has ideas to make it even better!
