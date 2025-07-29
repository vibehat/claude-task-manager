import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneTeamMemberArgs } from "./args/UpsertOneTeamMemberArgs";
import { TeamMember } from "../../../models/TeamMember";
export declare class UpsertOneTeamMemberResolver {
    upsertOneTeamMember(ctx: any, info: GraphQLResolveInfo, args: UpsertOneTeamMemberArgs): Promise<TeamMember>;
}
