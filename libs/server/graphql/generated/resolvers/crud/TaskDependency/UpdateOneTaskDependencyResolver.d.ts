import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneTaskDependencyArgs } from "./args/UpdateOneTaskDependencyArgs";
import { TaskDependency } from "../../../models/TaskDependency";
export declare class UpdateOneTaskDependencyResolver {
    updateOneTaskDependency(ctx: any, info: GraphQLResolveInfo, args: UpdateOneTaskDependencyArgs): Promise<TaskDependency | null>;
}
