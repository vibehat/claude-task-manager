import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneTeamMemberArgs } from "./args/DeleteOneTeamMemberArgs";
import { TeamMember } from "../../../models/TeamMember";
export declare class DeleteOneTeamMemberResolver {
    deleteOneTeamMember(ctx: any, info: GraphQLResolveInfo, args: DeleteOneTeamMemberArgs): Promise<TeamMember | null>;
}
