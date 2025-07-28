import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTaskDependencyOrThrowArgs } from "./args/FindFirstTaskDependencyOrThrowArgs";
import { TaskDependency } from "../../../models/TaskDependency";
export declare class FindFirstTaskDependencyOrThrowResolver {
    findFirstTaskDependencyOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstTaskDependencyOrThrowArgs): Promise<TaskDependency | null>;
}
