import type { GraphQLResolveInfo } from "graphql";
import { GroupByLabelArgs } from "./args/GroupByLabelArgs";
import { LabelGroupBy } from "../../outputs/LabelGroupBy";
export declare class GroupByLabelResolver {
    groupByLabel(ctx: any, info: GraphQLResolveInfo, args: GroupByLabelArgs): Promise<LabelGroupBy[]>;
}
