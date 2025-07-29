import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTaskDependencyArgs } from "./args/FindFirstTaskDependencyArgs";
import { TaskDependency } from "../../../models/TaskDependency";
export declare class FindFirstTaskDependencyResolver {
    findFirstTaskDependency(ctx: any, info: GraphQLResolveInfo, args: FindFirstTaskDependencyArgs): Promise<TaskDependency | null>;
}
