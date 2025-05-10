# Task Master Agent Instructions

## Overview

Task Master is a task management tool for tracking development projects, breaking down work into manageable tasks, monitoring progress, and ensuring tasks are completed in the correct dependency order.

## Basic Commands

### View Tasks

```bash
# List all tasks with status, priority, and dependencies
npx task-master list

# Show only tasks with a specific status
npx task-master list --status=pending
npx task-master list --status=in-progress
npx task-master list --status=done

# List tasks including subtasks
npx task-master list --with-subtasks
```

### Find What to Work On Next

```bash
# Shows the recommended next task based on dependencies and priority
npx task-master next
```

### View Task Details

```bash
# Show full details for a specific task
npx task-master show <id>

# Example for a main task
npx task-master show 1

# Example for a subtask (using dot notation)
npx task-master show 1.2
```

## Task Management

### Managing Task Status

```bash
# Mark a task as in progress
npx task-master set-status --id=<id> --status=in-progress

# Mark a task as completed
npx task-master set-status --id=<id> --status=done

# Other available statuses
npx task-master set-status --id=<id> --status=pending
npx task-master set-status --id=<id> --status=review
npx task-master set-status --id=<id> --status=deferred
npx task-master set-status --id=<id> --status=cancelled
```

### Breaking Down Tasks

```bash
# Break down a task into subtasks (AI-powered)
npx task-master expand --id=<id>

# Use research to improve subtask generation
npx task-master expand --id=<id> --research

# Specify number of subtasks to generate
npx task-master expand --id=<id> --num=5

# Replace existing subtasks instead of appending
npx task-master expand --id=<id> --force

# Provide additional context for better subtask generation
npx task-master expand --id=<id> --prompt="Focus on accessibility features"

# Expand all eligible tasks at once
npx task-master expand --all
```

### Managing Subtasks

```bash
# Add a new subtask manually
npx task-master add-subtask --parent=<id> --title="New subtask title" --description="Subtask description"

# Add implementation details to a subtask
npx task-master update-subtask --id=<subtask_id> --prompt="Implementation findings and notes"

# Remove all subtasks from a parent task
npx task-master clear-subtasks --id=<parent_id>

# Remove a specific subtask
npx task-master remove-subtask --id=<subtask_id>

# Convert a subtask to a standalone task
npx task-master remove-subtask --id=<subtask_id> --convert
```

### Managing Dependencies

```bash
# Add a dependency between tasks
npx task-master add-dependency --id=<task_id> --depends-on=<dependency_id>

# Remove a dependency
npx task-master remove-dependency --id=<task_id> --depends-on=<dependency_id>

# Check for dependency issues
npx task-master validate-dependencies

# Fix dependency issues automatically
npx task-master fix-dependencies
```

### Adding New Tasks

```bash
# Add a completely new task (AI-powered)
npx task-master add-task --prompt="Implement user authentication with JWT" --priority=high

# Add with dependencies
npx task-master add-task --prompt="Add dark mode toggle" --dependencies=1,2
```

### Updating Existing Tasks

```bash
# Update a specific task with new information
npx task-master update-task --id=<id> --prompt="Changing approach to use React Query instead"

# Update multiple upcoming tasks at once
npx task-master update --from=<id> --prompt="Switching to Tailwind CSS from styled-components"
```

## Typical Workflow

1. **Start your work session** by checking the task list:
   ```bash
   npx task-master list
   ```

2. **Identify what to work on next**:
   ```bash
   npx task-master next
   ```

3. **Examine task details**:
   ```bash
   npx task-master show <id>
   ```

4. **Break down complex tasks** into smaller subtasks:
   ```bash
   npx task-master expand --id=<id> --research
   ```

5. **Start working** on the task:
   ```bash
   npx task-master set-status --id=<id> --status=in-progress
   ```

6. **Document implementation details** as you progress (for subtasks):
   ```bash
   npx task-master update-subtask --id=<subtask_id> --prompt="Found X approach works best because..."
   ```

7. **Mark tasks as complete** when done:
   ```bash
   npx task-master set-status --id=<id> --status=done
   ```

8. **Move to the next task** and repeat.

## Advanced Usage

### Analyzing Task Complexity

```bash
# Run complexity analysis
npx task-master analyze-complexity --research

# View complexity report
npx task-master complexity-report
```

### Regenerating Task Files

```bash
# Regenerate individual markdown task files from tasks.json
npx task-master generate
```

### Task Master Configuration

```bash
# View current model configuration
npx task-master models

# Set up AI models interactively
npx task-master models --setup
```

## Key Things to Remember

1. **Always check dependencies** before starting a task
2. **Keep the task status updated** as you work
3. **Document implementation details** using `update-subtask` for future reference
4. **Break down complex tasks** instead of trying to tackle them all at once
5. **Verify work** against the test strategy before marking as done
6. **Update task details** if implementation differs from original plan

## Task Structure

Each task typically contains:

- **ID**: Unique identifier (e.g., `1` or `1.2` for subtasks)
- **Title**: Brief description
- **Description**: High-level overview
- **Status**: Current state (pending, in-progress, done, etc.)
- **Dependencies**: Tasks that must be completed first
- **Priority**: Importance level (high, medium, low)
- **Details**: Implementation instructions
- **Test Strategy**: How to verify the task is complete
- **Subtasks**: Smaller components of a larger task

## Using Task Master Efficiently

- Use `next` command to focus on the right task at the right time
- Break down complex tasks before starting work
- Document findings as you implement
- Mark tasks as done as soon as they're verified complete
- Update tasks when implementation differs from the plan 