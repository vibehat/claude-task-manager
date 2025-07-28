import type { GraphQLResolveInfo } from "graphql";
import { GroupByTaskDependencyArgs } from "./args/GroupByTaskDependencyArgs";
import { TaskDependencyGroupBy } from "../../outputs/TaskDependencyGroupBy";
export declare class GroupByTaskDependencyResolver {
    groupByTaskDependency(ctx: any, info: GraphQLResolveInfo, args: GroupByTaskDependencyArgs): Promise<TaskDependencyGroupBy[]>;
}
