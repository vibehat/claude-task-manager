import type { GraphQLResolveInfo } from "graphql";
import { GroupByTeamProjectArgs } from "./args/GroupByTeamProjectArgs";
import { TeamProjectGroupBy } from "../../outputs/TeamProjectGroupBy";
export declare class GroupByTeamProjectResolver {
    groupByTeamProject(ctx: any, info: GraphQLResolveInfo, args: GroupByTeamProjectArgs): Promise<TeamProjectGroupBy[]>;
}
