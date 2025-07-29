import type { GraphQLResolveInfo } from "graphql";
import { GroupByTaskArgs } from "./args/GroupByTaskArgs";
import { TaskGroupBy } from "../../outputs/TaskGroupBy";
export declare class GroupByTaskResolver {
    groupByTask(ctx: any, info: GraphQLResolveInfo, args: GroupByTaskArgs): Promise<TaskGroupBy[]>;
}
