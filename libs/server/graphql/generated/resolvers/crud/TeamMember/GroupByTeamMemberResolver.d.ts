import type { GraphQLResolveInfo } from "graphql";
import { GroupByTeamMemberArgs } from "./args/GroupByTeamMemberArgs";
import { TeamMemberGroupBy } from "../../outputs/TeamMemberGroupBy";
export declare class GroupByTeamMemberResolver {
    groupByTeamMember(ctx: any, info: GraphQLResolveInfo, args: GroupByTeamMemberArgs): Promise<TeamMemberGroupBy[]>;
}
