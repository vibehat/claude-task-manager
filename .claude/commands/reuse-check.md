# Reuse Check - Validate Before Creating

Use this command before creating any new files or components to ensure you're not duplicating existing functionality.

Usage: `/reuse-check [what you want to create]`

## Validation Process

**MANDATORY REUSE ANALYSIS FOR:** $ARGUMENTS

**STEP 1: EXHAUSTIVE SEARCH**

- Search for existing similar functionality
- Check all relevant directories and files
- Document every related component found

**STEP 2: REUSABILITY ASSESSMENT**

- Can existing code be extended?
- Can existing patterns be followed?
- Are there utility functions to reuse?
- What architectural constraints exist?

**STEP 3: JUSTIFICATION REQUIREMENT**
If creating new files is necessary, provide:

- Detailed explanation why extension won't work
- Specific architectural reasons for new creation
- Migration strategy from any duplicate functionality
- Integration plan with existing systems

**STEP 4: COMPLIANCE CONFIRMATION**

- ✓ All existing options explored
- ✓ Extension possibilities exhausted
- ✓ Creation fully justified with specific reasons
- ✓ Follows existing architectural patterns

**FINAL DECISION:**
[EXTEND EXISTING] or [CREATE NEW - JUSTIFIED]

Remember: Creating new files without this analysis violates project rules.
