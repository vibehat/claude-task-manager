import type { GraphQLResolveInfo } from "graphql";
import { CreateOneTeamMemberArgs } from "./args/CreateOneTeamMemberArgs";
import { TeamMember } from "../../../models/TeamMember";
export declare class CreateOneTeamMemberResolver {
    createOneTeamMember(ctx: any, info: GraphQLResolveInfo, args: CreateOneTeamMemberArgs): Promise<TeamMember>;
}
