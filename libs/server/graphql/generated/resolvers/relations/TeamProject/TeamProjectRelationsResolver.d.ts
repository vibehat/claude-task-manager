import type { GraphQLResolveInfo } from "graphql";
import { Project } from "../../../models/Project";
import { Team } from "../../../models/Team";
import { TeamProject } from "../../../models/TeamProject";
export declare class TeamProjectRelationsResolver {
    team(teamProject: TeamProject, ctx: any, info: GraphQLResolveInfo): Promise<Team>;
    project(teamProject: TeamProject, ctx: any, info: GraphQLResolveInfo): Promise<Project>;
}
