import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTeamMemberOrThrowArgs } from "./args/FindUniqueTeamMemberOrThrowArgs";
import { TeamMember } from "../../../models/TeamMember";
export declare class FindUniqueTeamMemberOrThrowResolver {
    getTeamMember(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTeamMemberOrThrowArgs): Promise<TeamMember | null>;
}
