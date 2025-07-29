import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTaskDependencyOrThrowArgs } from "./args/FindUniqueTaskDependencyOrThrowArgs";
import { TaskDependency } from "../../../models/TaskDependency";
export declare class FindUniqueTaskDependencyOrThrowResolver {
    getTaskDependency(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTaskDependencyOrThrowArgs): Promise<TaskDependency | null>;
}
