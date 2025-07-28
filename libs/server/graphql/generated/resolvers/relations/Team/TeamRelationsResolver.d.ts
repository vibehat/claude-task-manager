import type { GraphQLResolveInfo } from "graphql";
import { Cycle } from "../../../models/Cycle";
import { Team } from "../../../models/Team";
import { TeamMember } from "../../../models/TeamMember";
import { TeamProject } from "../../../models/TeamProject";
import { TeamCyclesArgs } from "./args/TeamCyclesArgs";
import { TeamMembersArgs } from "./args/TeamMembersArgs";
import { TeamProjectsArgs } from "./args/TeamProjectsArgs";
export declare class TeamRelationsResolver {
    members(team: Team, ctx: any, info: GraphQLResolveInfo, args: TeamMembersArgs): Promise<TeamMember[]>;
    projects(team: Team, ctx: any, info: GraphQLResolveInfo, args: TeamProjectsArgs): Promise<TeamProject[]>;
    cycles(team: Team, ctx: any, info: GraphQLResolveInfo, args: TeamCyclesArgs): Promise<Cycle[]>;
}
