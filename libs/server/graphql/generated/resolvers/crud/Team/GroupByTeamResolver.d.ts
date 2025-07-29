import type { GraphQLResolveInfo } from "graphql";
import { GroupByTeamArgs } from "./args/GroupByTeamArgs";
import { TeamGroupBy } from "../../outputs/TeamGroupBy";
export declare class GroupByTeamResolver {
    groupByTeam(ctx: any, info: GraphQLResolveInfo, args: GroupByTeamArgs): Promise<TeamGroupBy[]>;
}
