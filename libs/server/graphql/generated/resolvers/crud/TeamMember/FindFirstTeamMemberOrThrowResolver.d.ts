import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTeamMemberOrThrowArgs } from "./args/FindFirstTeamMemberOrThrowArgs";
import { TeamMember } from "../../../models/TeamMember";
export declare class FindFirstTeamMemberOrThrowResolver {
    findFirstTeamMemberOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstTeamMemberOrThrowArgs): Promise<TeamMember | null>;
}
