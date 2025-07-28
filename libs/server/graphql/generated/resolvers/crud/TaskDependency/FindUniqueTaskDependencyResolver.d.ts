import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTaskDependencyArgs } from "./args/FindUniqueTaskDependencyArgs";
import { TaskDependency } from "../../../models/TaskDependency";
export declare class FindUniqueTaskDependencyResolver {
    taskDependency(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTaskDependencyArgs): Promise<TaskDependency | null>;
}
