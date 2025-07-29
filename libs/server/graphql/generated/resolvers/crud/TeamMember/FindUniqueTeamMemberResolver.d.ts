import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTeamMemberArgs } from "./args/FindUniqueTeamMemberArgs";
import { TeamMember } from "../../../models/TeamMember";
export declare class FindUniqueTeamMemberResolver {
    teamMember(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTeamMemberArgs): Promise<TeamMember | null>;
}
