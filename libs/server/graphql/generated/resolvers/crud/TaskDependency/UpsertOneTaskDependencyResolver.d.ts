import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneTaskDependencyArgs } from "./args/UpsertOneTaskDependencyArgs";
import { TaskDependency } from "../../../models/TaskDependency";
export declare class UpsertOneTaskDependencyResolver {
    upsertOneTaskDependency(ctx: any, info: GraphQLResolveInfo, args: UpsertOneTaskDependencyArgs): Promise<TaskDependency>;
}
