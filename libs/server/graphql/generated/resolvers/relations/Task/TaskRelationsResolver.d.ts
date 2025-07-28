import type { GraphQLResolveInfo } from "graphql";
import { Issue } from "../../../models/Issue";
import { Subtask } from "../../../models/Subtask";
import { Task } from "../../../models/Task";
import { TaskDependency } from "../../../models/TaskDependency";
import { TaskDependenciesArgs } from "./args/TaskDependenciesArgs";
import { TaskDependentsArgs } from "./args/TaskDependentsArgs";
import { TaskIssuesArgs } from "./args/TaskIssuesArgs";
import { TaskSubtasksArgs } from "./args/TaskSubtasksArgs";
export declare class TaskRelationsResolver {
    subtasks(task: Task, ctx: any, info: GraphQLResolveInfo, args: TaskSubtasksArgs): Promise<Subtask[]>;
    dependencies(task: Task, ctx: any, info: GraphQLResolveInfo, args: TaskDependenciesArgs): Promise<TaskDependency[]>;
    dependents(task: Task, ctx: any, info: GraphQLResolveInfo, args: TaskDependentsArgs): Promise<TaskDependency[]>;
    issues(task: Task, ctx: any, info: GraphQLResolveInfo, args: TaskIssuesArgs): Promise<Issue[]>;
}
