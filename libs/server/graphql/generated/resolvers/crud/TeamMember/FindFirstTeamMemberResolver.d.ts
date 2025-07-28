import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTeamMemberArgs } from "./args/FindFirstTeamMemberArgs";
import { TeamMember } from "../../../models/TeamMember";
export declare class FindFirstTeamMemberResolver {
    findFirstTeamMember(ctx: any, info: GraphQLResolveInfo, args: FindFirstTeamMemberArgs): Promise<TeamMember | null>;
}
