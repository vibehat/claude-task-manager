import type { GraphQLResolveInfo } from "graphql";
import { Task } from "../../../models/Task";
import { TaskDependency } from "../../../models/TaskDependency";
export declare class TaskDependencyRelationsResolver {
    task(taskDependency: TaskDependency, ctx: any, info: GraphQLResolveInfo): Promise<Task>;
    dependsOn(taskDependency: TaskDependency, ctx: any, info: GraphQLResolveInfo): Promise<Task>;
}
