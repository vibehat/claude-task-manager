import type { GraphQLResolveInfo } from "graphql";
import { FindManyTaskDependencyArgs } from "./args/FindManyTaskDependencyArgs";
import { TaskDependency } from "../../../models/TaskDependency";
export declare class FindManyTaskDependencyResolver {
    taskDependencies(ctx: any, info: GraphQLResolveInfo, args: FindManyTaskDependencyArgs): Promise<TaskDependency[]>;
}
