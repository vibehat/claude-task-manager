import { TaskCountDependenciesArgs } from "./args/TaskCountDependenciesArgs";
import { TaskCountDependentsArgs } from "./args/TaskCountDependentsArgs";
import { TaskCountIssuesArgs } from "./args/TaskCountIssuesArgs";
import { TaskCountSubtasksArgs } from "./args/TaskCountSubtasksArgs";
export declare class TaskCount {
    subtasks: number;
    dependencies: number;
    dependents: number;
    issues: number;
    getSubtasks(root: TaskCount, args: TaskCountSubtasksArgs): number;
    getDependencies(root: TaskCount, args: TaskCountDependenciesArgs): number;
    getDependents(root: TaskCount, args: TaskCountDependentsArgs): number;
    getIssues(root: TaskCount, args: TaskCountIssuesArgs): number;
}
