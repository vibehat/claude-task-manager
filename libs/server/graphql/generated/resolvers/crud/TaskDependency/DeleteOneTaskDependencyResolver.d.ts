import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneTaskDependencyArgs } from "./args/DeleteOneTaskDependencyArgs";
import { TaskDependency } from "../../../models/TaskDependency";
export declare class DeleteOneTaskDependencyResolver {
    deleteOneTaskDependency(ctx: any, info: GraphQLResolveInfo, args: DeleteOneTaskDependencyArgs): Promise<TaskDependency | null>;
}
