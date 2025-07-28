import type { GraphQLResolveInfo } from "graphql";
import { Issue } from "../../../models/Issue";
import { Subtask } from "../../../models/Subtask";
import { Task } from "../../../models/Task";
import { SubtaskIssuesArgs } from "./args/SubtaskIssuesArgs";
export declare class SubtaskRelationsResolver {
    parentTask(subtask: Subtask, ctx: any, info: GraphQLResolveInfo): Promise<Task>;
    issues(subtask: Subtask, ctx: any, info: GraphQLResolveInfo, args: SubtaskIssuesArgs): Promise<Issue[]>;
}
