import type { GraphQLResolveInfo } from "graphql";
import { FindManyTeamMemberArgs } from "./args/FindManyTeamMemberArgs";
import { TeamMember } from "../../../models/TeamMember";
export declare class FindManyTeamMemberResolver {
    teamMembers(ctx: any, info: GraphQLResolveInfo, args: FindManyTeamMemberArgs): Promise<TeamMember[]>;
}
