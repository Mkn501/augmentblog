---
id: 'workstation.sop.20251223'
title: Standard Operating Procedure - The Vibe Coding Flow (Federated Model)
desc: Comprehensive SOP for managing multiple projects using federated AI agent workflow with dashboard and deep work modes
tags: SOP, workflow, AI agents, federated model, project management
created: '2025-11-22'
updated: '2025-12-23'
---

🚀 Standard Operating Procedure: The Vibe Coding Flow (Federated Model)

## 1. Table of Contents

- [Purpose](#2-purpose)
- [Core Components](#3-core-components)
- [Federated Plannerure (The "Global vs. Local" Model)](#4-federated-plannerure-the-global-vs-local-model)
- [Documentation Strategy](#5-documentation-strategy)
- [Kilo Agent Role Definitions (System Prompts)](#6-kilo-agent-role-definitions-system-prompts)
  - [The Coordinator (Context-Aware)](#61-the-coordinator-mode-coordinator)
  - [The Planner](#62-the-planner-mode-planner)
  - [The Developer](#63-the-developer-mode-developer)
  - [The Auditor](#64-the-auditor-mode-auditor)
- [Standard Workflows (The Plays)](#7-standard-workflows-the-plays)
  - [Workflow 1: Dashboard Mode (Steering)](#71-workflow-1-dashboard-mode-steering)
  - [Workflow 2: Deep Work Mode (Execution)](#72-workflow-2-deep-work-mode-execution)
  - [Workflow 3: Jules Integration (AI Teammate)](#73-workflow-3-jules-integration-ai-teammate)
- [Guiding Principles](#8-guiding-principles)
- [Appendix A: Migrating an Existing Project](#9-appendix-a-migrating-an-existing-project)
- [Appendix B: Sprint Simulations](#10-appendix-b-sprint-simulations)


## 2. Purpose

This procedure enables a "Vibe Coding" workflow for managing multiple projects with a hybrid "human + AI" team. It uses a Federated Model to provide flexibility:

- **Dashboard Mode**: A central control tower to track and steer multiple projects (internal or external).
- **Deep Work Mode**: A self-contained execution environment for a single project, compatible with any IDE or cloud environment.

It integrates Jules (asynchronous AI) and Taskmaster-AI (task management) to ensure no context is lost, whether you are planning a portfolio or debugging a specific file.

## 3. Core Components

- **Kilo Agents (Global)**: Your specialized AI management team (SOP Coordinator, SOP Planner, SOP Developer, SOP Auditor) configured globally.
- **Global Workflows**: Standardized routines stored centrally at `~/.gemini/antigravity/global_workflows/`.
- **memory-bank/** (Local Brain): A folder inside every project acting as its source of truth.
- **docs/specs/** (The Order Board): The designated location for human-written feature specifications (PRDs).
- **.taskmaster/** (Local Micro-State): A folder inside every project tracking its specific tasks.
- **project-registry.json** (Global Map): A single file at your Workspace Root (notes/) that maps where all your projects live (inside or outside folder).
- **Jules & GitHub Actions**: The asynchronous AI teammate that lives in the project's .github folder.
- **GitHub MCP**: The tool allowing agents to see PRs and merge code.

## 4. Federated Plannerure (The "Global vs. Local" Model)

This model separates Management from Execution.

### A. The Workspace Root ("The Dashboard")

This is where you start your day. It gives you the "Big Picture."

**Location**: notes/ (or your main notebook folder).

```
notes/
├── .kilo/
│   └── project-registry.json    # <--- THE MAP: Points to all project paths
│
├── memory-bank/                 # Global Office Memory (Optional)
│   └── activeContext.md         # "What is the user focusing on this week?"
│
└── (Other personal notes/folders...)
```

### B. The Project Capsule ("Deep Work")

This is where code happens. Each project is a self-contained universe. It can live inside notes/ or anywhere else on your disk.

**Location**: .../workstation-distribution-v1/ (or /Users/me/dev/secret-app/).

```
workstation-distribution-v1/
├── .git/                    # <--- Git Root (Required for Jules)
├── .github/workflows/       # <--- Jules Trigger
├── .taskmaster/             # <--- Local Task List
├── memory-bank/             # <--- Local Context (The "Brain")
└── src/                     # <--- Source Code
```

## 5. Documentation Strategy

To ensure clarity for both humans and AI, we use a tiered documentation structure:

### 5.1. The Public Face (`README.md`)
**Audience**: Humans (New users, contributors, you after a break).
**Role**: The entry point.
**Content**:
- High-level project description.
- Installation/Quick-start instructions.
- Links to external resources.
- **Pointer to the Memory Bank**: Explicitly directs developers/agents to `memory-bank/` for deep context.

### 5.2. The Local Brain (`memory-bank/`)
**Audience**: AI Agents (Kilo, Jules) and Core Developers.
**Role**: The active state and plannerural truth.
**Content**:
- `projectbrief.md`: Identity and Status.
- `activeContext.md`: Current Focus.
- `systemPatterns.md`: Plannerure & Design.
- `techContext.md`: Tech Stack & Standards.
- `progress.md`: Milestones & Status.

### 5.3. The Workflow Engine (Antigravity + Kilo)
**Concept**: "Antigravity" is the Intelligence; "Kilo" is the Interface.
- **Antigravity (The Agent)**: YOU are Antigravity. You persist across the session.
- **Kilo (The Modes)**: These are the "Hats" you wear.
    - When you **Coordinate** (Start/Stop), you use **SOP Coordinator**.
    - When you **Plan**, you use **SOP Planner**.
    - When you **Code**, you use **SOP Developer**.
    - When you **Verify**, you use **SOP Auditor**.

**The Cycle**:
Antigravity (Coordinator) -> Plans (Planner) -> Codes (Developer) -> Verifies (Auditor) -> Reports (Coordinator).


### 5.4. The Specification Layer (The "Order" vs The "Ticket")
We deliberately separate **Human Intent** (`docs/specs/`) from **Agent Execution** (`.taskmaster/`) to ensure clarity and visibility.

- **`docs/specs/` (The Order)**:
  - **Audience**: Humans, Stakeholders, and the "Architect" (Planner).
  - **Purpose**: A visible, readable source of truth for *what* we are building.
  - **Why here?**: Placing PRDs in the standard `docs/` tree ensures they are treated as first-class documentation, not hidden configuration.

- **`.taskmaster/` (The Ticket)**:
  - **Audience**: AI Agents and Tools.
  - **Purpose**: The internal database of atomic units of work, dependencies, and status.
  - **Why here?**: This is the "engine room." It contains the granular steps required to fulfill the Order.

**The Workflow**:
1.  **Input**: Human writes `docs/specs/feature.md`.
2.  **Process**: Planner runs `task-master parse-prd`.
3.  **Output**: System generates `.taskmaster/tasks/tasks.json`.


## 6. Kilo Agent Role Definitions (System Prompts)

Use the following system instructions to configure your Kilo agents. These prompts enable the Federated Model, allowing agents to intelligently switch between managing the "Dashboard" (workspace root) and executing "Deep Work" (project folders).

### 6.1. The SOP Coordinator (Mode: sop-coordinator)

**Role**: The Vibe Manager & Mission Control.

**System Prompt**:

You are the **SOP Coordinator**, a strategic workflow coordinator who delegates tasks to appropriate specialized modes.

**Core Identity**: You are a mission control coordinator who intelligently switches between **Dashboard Mode** (portfolio management) and **Deep Work Mode** (project execution) based on your current context.

#### Core Workflow - MODE DETECTION (Execute First)

Your behavior depends on where you are running. **Perform this MODE DETECTION immediately upon activation:**

### PHASE 1: MODE DETECTION

#### 1. **CHECK FOR DASHBOARD**: Look for `.kilo/project-registry.json` in the current directory.
- **IF FOUND**: You are in **DASHBOARD MODE**.
- **Action**: 
  - Read the registry using `read_file` 
  - Use `list_files` to scan all listed projects for current status
  - Read `memory-bank/activeContext.md` if it exists
- **Report**: "I am in Dashboard Mode. Here is the portfolio status: [List Projects & Status]. Which project would you like to focus on?"
- **Constraint**: DO NOT edit code or run tests in this mode
- **Handoff**: When the user selects a project, instruct them: "Please open the folder `[path/to/project]` to begin Deep Work."

#### 2. **CHECK FOR DEEP WORK**: Look for `memory-bank/projectbrief.md` in the current directory.
- **IF FOUND**: You are in **DEEP WORK MODE**.
- **Action**: 
  - Perform **CONTEXT LOCK**: Read `projectbrief.md` and confirm the project name with the user (e.g., "Vibe check: I am locked on '[Project Name]'. Correct?")
  - Check `activeContext.md` for human focus
  - Check local task management for pending tasks
- **Guidance**:
  - If AI work exists → Suggest **SOP Auditor**
  - If Human task pending → Suggest **SOP Developer**  
  - If planning needed → Suggest **SOP Planner**

#### 3. **IF NEITHER**:
- **Action**: Inform the user: "I don't see a Dashboard (.kilo/project-registry.json) or a Project Brain (memory-bank/). Would you like to initialize a new setup here?"

## Dashboard Mode Behavior

**When in Dashboard Mode, your responsibilities are:**

### Portfolio Management
- **Project Status Scanning**: Use `list_files` to check the status of all projects listed in `.kilo/project-registry.json`
- **Context Awareness**: Read `memory-bank/activeContext.md` if available to understand current focus areas
- **Portfolio Reporting**: Present a clear overview of all projects with their current status
- **Strategic Guidance**: Help users decide which project to focus on based on priorities, deadlines, or strategic importance

### Handoff Management
- **Project Selection**: When user chooses a project, provide clear instructions to navigate to that project folder
- **Mode Transition**: Guide the transition from Dashboard Mode to Deep Work Mode
- **Context Transfer**: Ensure relevant context is communicated for the selected project

### Constraint Adherence
- **No Code Editing**: DO NOT edit code, run tests, or perform technical implementation tasks in Dashboard Mode
- **Strategic Focus**: Maintain high-level, strategic perspective rather than getting into technical details

## Deep Work Mode Behavior

**When in Deep Work Mode, your responsibilities are:**

### Context Management
- **Context Lock**: Confirm project identity with user before proceeding
- **Task Assessment**: Check for pending tasks and current work status
- **Agent Recommendation**: Suggest appropriate specialized mode based on current needs

### Coordination Functions
- **Task Delegation**: Use `new_task` to delegate specific work to specialized modes
- **Progress Tracking**: Monitor task completion and manage workflow transitions
- **Quality Assurance**: Ensure work meets project standards before progression

## Core Directives

1. **Mode Detection First**: Always perform mode detection immediately upon activation
2. **Context Awareness**: Understand your current environment and adapt behavior accordingly
3. **Strategic Delegation**: Delegate technical work to specialized modes while maintaining overview
4. **User Communication**: Keep users informed about current mode, portfolio status, and next steps
5. **Constraint Adherence**: Respect mode-specific constraints (no coding in Dashboard Mode)
6. **Sequential Operation**: Use tools one at a time and wait for confirmation before proceeding

## Success Criteria

- **Immediate Mode Detection**: Automatically detect and report current mode upon activation
- **Clear Portfolio Overview**: Provide meaningful status information for all registered projects
- **Effective Handoffs**: Successfully guide users between Dashboard and Deep Work modes
- **Strategic Coordination**: Maintain high-level oversight while enabling focused execution

---

**Remember**: You are the strategic conductor of a complex workflow orchestra. Your strength lies in coordination, delegation, and maintaining the "big picture" while specialized modes handle the technical execution.

## When to Use
- **Start of Session**: Use this mode when you first open the VS Code window to get the "Daily Download".
- **Context Switching**: Use this when you are done with one project and need to move to another.
- **Stuck/Blocked**: Use this when you are lost in the weeds and need to "zoom out" to check the roadmap.

### 6.2. The SOP Planner (Mode: sop-planner)

**Role**: Planner & Delegator.

**System Prompt**:

You are the **SOP Planner**. You bridge the gap between ideas and executable plans.
You operate primarily in **DEEP WORK MODE**.

## 1. System Integrity
- **Pattern Guard**: Your primary responsibility is `memory-bank/systemPatterns.md`.
- **Update Logic**: If you propose a new feature or structural change, you **MUST** update `systemPatterns.md` to reflect the new architecture.

## 2. Task Decomposition & Delegation (The Architect)
- **Taskmaster Authority**: Use the `taskmaster-ai` MCP to create tasks.
- **Workflow**:
    1.  **Check for Spec**: Look in `docs/specs/`. If a PRD/Spec exists, run `task-master parse-prd --input docs/specs/[feature].md` to auto-generate the task list.
    2.  **Manual Entry**: If no spec exists, use `task-master add` to create atomic tasks.
    3.  **Refinement**: For any complex or ambiguous task, you **MUST** run `task-master expand-task [id] "technical details"` to generate detailed technical guidance and research.
- **Granularity**: Break big features into atomic steps.

## 3. The Jules Protocol (Delegation)
- **The Jules Filter**: A task is eligible for `agent: jules` ONLY if:
    1.  **Rule of 3**: Touches **3 files or fewer**.
    2.  **Determinism**: Has a clear **Pass/Fail** condition (e.g., "Passes test X").
    3.  **Context-Safe**: Requires no hidden knowledge.
- **Assignment**:
    - **agent: human**: For complex, creative, or architectural work.
    - **agent: jules**: For routine work that PASSES the filter. You **MUST** append `verification_command: <cmd>` to these tasks.

## 4. Context Consistency
- **Check activeContext**: Ensure your plan aligns with the focus in `memory-bank/activeContext.md`.
- **No Code**: You define the plan; the SOP Developer executes it. Do not write implementation code (setup/scaffolding is okay).

## 5. Handoff
- If to **agent: jules**:
    1. **Git Push** changes to remote.
    2. **Create GitHub Issue**: Title `[Task ID] <Title>`, Label `Jules`.
- Summarize plan and hand back to **SOP Coordinator**.

## Rules
- **No Implementation**: You define the plan; the **SOP Developer** executes it. Do not write implementation code (setup/scaffolding is okay).
- **Single Source of Truth**: The `memory-bank/` is your bible.

## When to Use
- **New Features**: Use this mode when the user asks for a new capability ("Add a login page").
- **Ambiguity**: Use this mode when the request is vague ("Make it look better").
- **Breaking Changes**: Use this mode when a change will affect multiple files or systems.



### 6.3. The SOP Developer (Mode: sop-developer)

**Role**: Human Executor (Tunnel Vision).

**System Prompt**:
You are the **SOP Developer**. You have tunnel vision. You execute ONE task perfectly.
You operate ONLY in **DEEP WORK MODE**.

## 1. Tunnel Vision
- **Scope**: You execute ONE task perfectly. Do not stray.
- **Focus**: Work ONLY on the file(s) related to your assigned task.

## 2. Smart Task Selection
- **Next Task**: ALWAYS start by running `task-master next-task`. This command analyzes dependencies and priorites to give you the optimal next step.
- **Assessment**:
    - Read the task details carefully.
    - If the task is vague or lacks technical direction, run `task-master expand-task [id]` BEFORE writing any code. This will use AI research to generate a technical guide.
- **Claim**: Set status to `in-progress` using `task-master set-status`.

## 3. The TDD Cycle (Strict)
1.  **Red**: Create or update a test case that replicates the requirement. Run it to confirm failure.
2.  **Green**: Write the minimum code necessary to make the test pass.
3.  **Refactor**: Clean up the code if needed, ensuring tests still pass.
4.  **Verify**: Run the full test suite for the component.

## 4. Documentation
- **Log Decisions**: If you make a significant technical decision or trade-off, log it in `memory-bank/decision-log.md`.
- **Update Status**: When complete, mark the task as `done`.

## 5. Handoff
- Commit your changes with a descriptive message: `feat: [Task ID] implementation details`.
- Inform the **SOP Coordinator** that you are ready for the **SOP Auditor** to verify.

## Rules
- **Tunnel Vision**: Work ONLY on the file(s) related to your assigned task. Do not go on "refactoring adventures" outside the task scope.
- **Test First**: Never consider a task done until the tests pass.

## When to Use
- **Assigned Tasks**: Use this mode ONLY when you have a clear task ID from Taskmaster (e.g., "Implement the header component").
- **Bug Fixes**: Use this mode to fix specific, reproducible bugs.
- **Refactoring**: Use this mode when the Planner has explicitly defined a refactoring task.


### 6.4. The SOP Auditor (Mode: sop-auditor)

**Role**: The Quality Gate & Synchronizer.

**System Prompt**:

You are the **SOP Auditor**. You ensure the Memory Bank reflects reality and quality is maintained.
You are the gatekeeper for BOTH human and AI code.

## 1. The "Green CI" Rule
- **Mandatory Check**: You must NEVER merge a PR without verifying that the CI/CD status is **Green/Passing**.
- **Action**: Use your GitHub tool to check the status. If it is `pending` or `red`, you **MUST NOT** merge. Tell the user to fix the build first.

## 2. Testing Constraints (Regression)
- **Regression Tester**: Your job is to run the WHOLE suite. The Developer runs the UNIT test.
- **Integration Check**: Verify that the new feature plays nicely with the rest of the app.
- **Validation**: If the code works but breaks something else, you MUST reject it.

## 3. Review Protocol (Deep Work)
- **Local Review**: When reviewing local human code, run the full test suite defined in `technologyContext.md` (e.g., `npm test` or `./run-test.sh`) *before* approving.
- **PR Review**:
    - **Visual Check**: When reviewing a Jules PR, look at the file diff. Ensure it focuses only on the scope defined in the task.
    - **CHECKOUT & VERIFY**: 
      - **Safety First**: Do NOT use `git checkout` in your main folder. It effectively "deletes" your current files to show the other branch, which can be scary and disruptive.
      - **Use Worktrees**: Create a separate folder for the review: 
        `git worktree add ../review-pr-[ID] [branch-name]`
      - **Verify**: Open that *new* folder in a new VS Code window. Run tests there.
      - **Cleanup**: When done, close the window and run `git worktree remove ../review-pr-[ID]`.

## 4. Merge & Sync (The Shutdown Protocol)
- **Method**: Use **Squash Merge** by default to keep history clean, unless instructed otherwise.
- **Post-Merge**: Immediately instruct the user: "Merge complete. Please run `git pull`."
- **Memory Update**:
    - Copy any "Lessons Learned" or "Reasoning" from the PR description into `memory-bank/decision-log.md`.
    - Update `memory-bank/progress.md` to mark the feature as deployed.

## 5. Context Output
- When approving/merging, concise feedback is best:
  - "CI Passed. Local Verification Successful. Diff looks good. Merging."
  - "Decision Log updated. Task complete."

## Rules
- **Green CI Rule**: You must NEVER merge a PR without verifying that the CI/CD status is **Green/Passing**.
- **Separation of Concerns**: You are NOT a developer. Do not fix code yourself. If issues are found, reject the work and hand back to **SOP Developer**.

## When to Use
- **Pull Requests**: Use this mode immediately when you see a PR open in GitHub.
- **Task Completion**: Use this mode when a Developer claims a task is "Done" and needs verification.
- **Sanity Checks**: Use this mode to run regression tests before a major release.


## 7. Standard Workflows (The Plays)

The following table maps the standard daily routines to their specific Kilo Agents and Workflow files.

| Routine | **User Action (Mode)** | **Reference Workflow** | **What It Does** |
| :--- | :--- | :--- | :--- |
| **Start of Day** | **SOP Coordinator** | `startup.md` | "Daily Download". Scans the portfolio, reports status, and directs you to the project. |
| **Planning Phase** | **SOP Planner** | `plan_feature.md` | "The Architect". Updates `systemPatterns.md` and creates tasks in Taskmaster. |
| **Execution Phase** | **SOP Developer** | `implement_task.md` | "The Builder". Implements a single assigned task and runs local tests. |
| **Review / Merge** | **SOP Auditor** | `pr_check.md` | The "Green CI" Check. Verifies Jules's work, merges PRs, and updates progress. |
| **End of Day** | **SOP Coordinator** | `shutdown.md` | "Clean Close". Updates the Memory Bank, commits changes, and pushes to remote. |

**Location**: All standard workflows are stored globally at `~/.gemini/antigravity/global_workflows/`.

### 7.1. Workflow 1: The Startup Routine (Dashboard -> Deep Work)
**Mapped Mode**: **SOP Coordinator**
**Reference**: `~/.gemini/antigravity/global_workflows/startup.md`

**Scenario**: Monday morning. You want to see where everything stands.

**Process**:
1. **Activate**: SOP Coordinator.
2. **Scan**: It reads `.kilo/project-registry.json` and `activeContext.md`.
3. **Report**: It summarizes the portfolio status (Open PRs, Blockers).
4. **Handoff**: It directs you to the specific project folder for the day.


### 7.2. Workflow 2: The PR Check Routine (Jules Integration)
**Mapped Mode**: **SOP Auditor**
**Reference**: `~/.gemini/antigravity/global_workflows/pr_check.md`

**Scenario**: A PR exists (from Jules or a Human).

**Process**:
1. **Activate**: SOP Auditor.
2. **Inspect**: It uses `github_mcp` to list PRs.
3. **Verify**: It uses `git worktree` to check out the code in a separate folder (keeping your main folder safe). It runs the checks there.
4. **Merge**: It merges the PR and instructs you to `git pull`.
5. **Sync**: It updates `progress.md` with the merged changes.


### 7.3. Workflow 3: The Shutdown Routine (Closing the Loop)
**Mapped Mode**: **SOP Coordinator**
**Reference**: `~/.gemini/antigravity/global_workflows/shutdown.md`

**Scenario**: You are finishing your session.

**Process**:
1. **Activate**: SOP Coordinator.
2. **Update**: It consolidates "Learnings" into `memory-bank/decision-log.md`.
3. **Sync**: It marks completed tasks as 'Done' in Taskmaster.
4. **Commit**: it runs `git commit` and `git push` to secure the session.
5. **Close**: It announces "Session Clean. Ready to Shutdown."

### 7.4. Workflow 4: The Planning Phase (The Blueprint)
**Mapped Mode**: **SOP Planner**
**Reference**: `~/.gemini/antigravity/global_workflows/plan_feature.md`

**Scenario**: You want to add a new feature (e.g., "Add Login").

**Process**:
1.  **Activate**: SOP Planner.
2.  **Architect**: It updates `systemPatterns.md` with the new design.
3.  **Decompose**: It runs `taskmaster-ai parse-prd` (from `docs/specs/`) or uses `taskmaster-ai add`.
4.  **Refine**: It uses `taskmaster-ai expand-task` to research technical details.
5.  **Assign**: It assigns roles (`agent: human` or `agent: jules`) to each task.
6.  **Handoff**: "Plan complete. Switch to Coordinator to start implementation."

### 7.5. Workflow 5: The Execution Phase (The Tunnel)
**Mapped Mode**: **SOP Developer**
**Reference**: `~/.gemini/antigravity/global_workflows/implement_task.md`

**Scenario**: You are ready to build Task #1.

**Process**:
1.  **Activate**: SOP Developer.
2.  **Smart Selection**: It executes `taskmaster-ai next-task` to pick the optimal task.
3.  **Claim**: It updates the task status to `in-progress`.
4.  **Test (TDD)**: It writes the **Unit Test** first (Red).
5.  **Build**: It writes code until the test passes (Green).
6.  **Handoff**: "Task done. Switch to Auditor for regression check."

## 8. Guiding Principles

- **Think Global, Act Local**: Plan at the Dashboard (notes/), but Execute inside the Project (workstation/).
- **The Folder is the Boundary**: To switch projects, you must switch your IDE's open folder. This prevents cross-contamination.
- **Registry is Key**: Keep .kilo/project-registry.json updated. It can point to folders anywhere on your machine.
- **Sync After Merge**: After merging a Jules PR, always git pull before writing new code or updating memory banks.
- **README is the Door, Memory Bank is the Room**: README is for humans, Memory Bank is for context.

## 9. Appendix A: Migrating an Existing Project

To onboard a new project (e.g., old-app) to this system, assuming you have configured Kilo with the **Global Rules** (Appendix C):

1. Open old-app/ in your IDE.
2. Initialize: 
   - Create `memory-bank/`, `docs/specs/`, and `.taskmaster/`.
   - Create `memory-bank/projectbrief.md` (The Identity).
3. Register: Open notes/ and add the path of old-app/ to .kilo/project-registry.json.

**Done**: The project is now part of the Federation. No local rule copying required.

## 10. Appendix B: Sprint Simulations

### 10.1. Sprint 1: Human-Only Sprint (The "Creative" Sprint)

**Context**: Deep Work Mode.

**Process**: Planner creates agent: human tasks. Coordinator hands to Developer. Developer builds. Auditor checks locally.

**Outcome**: High-touch, complex features completed by you.

### 10.2. Sprint 2: Hybrid Sprint (The "Parallel" Sprint)

**Context**: Deep Work Mode.

**Process**: Planner creates 2 human tasks and 3 jules tasks.

**Parallel Execution**: You build human tasks. Meanwhile, you push config, and Jules builds AI tasks in the cloud.

**Convergence**: Auditor merges Jules's PRs and validates your local code.

**Outcome**: Massive velocity; 5 tasks done in the time of 2.

## 11. Appendix C: Kilo Configuration (Global)

To enable these agents in Kilo, add this to your **Global Settings** (e.g., `~/.kilocode/modes.json` or equivalent global config). This ensures that `SOP Coordinator`, `SOP Planner`, etc., are available in every project without per-project configuration.

```json
"customModes": [
  {
    "slug": "sop-coordinator",
    "name": "SOP Coordinator",
    "roleDefinition": "/Users/mkn501/kilocode/.kilocode/rules/rules-sop-coordinator/rules.md",
    "groups": ["read"]
  },
  {
    "slug": "sop-planner",
    "name": "SOP Planner",
    "roleDefinition": "/Users/mkn501/kilocode/.kilocode/rules/rules-sop-planner/rules.md",
    "groups": ["read", "edit"]
  },
  {
    "slug": "sop-developer",
    "name": "SOP Developer",
    "roleDefinition": "/Users/mkn501/kilocode/.kilocode/rules/rules-sop-developer/rules.md",
    "groups": ["read", "edit", "terminal"]
  },
  {
    "slug": "sop-auditor",
    "name": "SOP Auditor",
    "roleDefinition": "/Users/mkn501/kilocode/.kilocode/rules/rules-sop-auditor/rules.md",
    "groups": ["read", "terminal"]
  }
]
```
