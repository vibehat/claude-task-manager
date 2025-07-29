import type { GraphQLResolveInfo } from "graphql";
import { GroupByIssuePriorityArgs } from "./args/GroupByIssuePriorityArgs";
import { IssuePriorityGroupBy } from "../../outputs/IssuePriorityGroupBy";
export declare class GroupByIssuePriorityResolver {
    groupByIssuePriority(ctx: any, info: GraphQLResolveInfo, args: GroupByIssuePriorityArgs): Promise<IssuePriorityGroupBy[]>;
}
