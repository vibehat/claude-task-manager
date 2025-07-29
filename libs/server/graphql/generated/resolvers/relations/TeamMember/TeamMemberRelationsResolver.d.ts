import type { GraphQLResolveInfo } from "graphql";
import { Team } from "../../../models/Team";
import { TeamMember } from "../../../models/TeamMember";
import { User } from "../../../models/User";
export declare class TeamMemberRelationsResolver {
    team(teamMember: TeamMember, ctx: any, info: GraphQLResolveInfo): Promise<Team>;
    user(teamMember: TeamMember, ctx: any, info: GraphQLResolveInfo): Promise<User>;
}
