import type { GraphQLResolveInfo } from "graphql";
import { CreateOneTaskDependencyArgs } from "./args/CreateOneTaskDependencyArgs";
import { TaskDependency } from "../../../models/TaskDependency";
export declare class CreateOneTaskDependencyResolver {
    createOneTaskDependency(ctx: any, info: GraphQLResolveInfo, args: CreateOneTaskDependencyArgs): Promise<TaskDependency>;
}
