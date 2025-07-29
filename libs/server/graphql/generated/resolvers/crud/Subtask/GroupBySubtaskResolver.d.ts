import type { GraphQLResolveInfo } from "graphql";
import { GroupBySubtaskArgs } from "./args/GroupBySubtaskArgs";
import { SubtaskGroupBy } from "../../outputs/SubtaskGroupBy";
export declare class GroupBySubtaskResolver {
    groupBySubtask(ctx: any, info: GraphQLResolveInfo, args: GroupBySubtaskArgs): Promise<SubtaskGroupBy[]>;
}
