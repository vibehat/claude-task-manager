import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneTeamMemberArgs } from "./args/UpdateOneTeamMemberArgs";
import { TeamMember } from "../../../models/TeamMember";
export declare class UpdateOneTeamMemberResolver {
    updateOneTeamMember(ctx: any, info: GraphQLResolveInfo, args: UpdateOneTeamMemberArgs): Promise<TeamMember | null>;
}
