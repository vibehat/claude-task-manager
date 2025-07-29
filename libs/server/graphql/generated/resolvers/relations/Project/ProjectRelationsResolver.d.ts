import type { GraphQLResolveInfo } from "graphql";
import { Issue } from "../../../models/Issue";
import { Project } from "../../../models/Project";
import { TeamProject } from "../../../models/TeamProject";
import { User } from "../../../models/User";
import { ProjectIssuesArgs } from "./args/ProjectIssuesArgs";
import { ProjectLeadArgs } from "./args/ProjectLeadArgs";
import { ProjectTeamsArgs } from "./args/ProjectTeamsArgs";
export declare class ProjectRelationsResolver {
    issues(project: Project, ctx: any, info: GraphQLResolveInfo, args: ProjectIssuesArgs): Promise<Issue[]>;
    lead(project: Project, ctx: any, info: GraphQLResolveInfo, args: ProjectLeadArgs): Promise<User | null>;
    teams(project: Project, ctx: any, info: GraphQLResolveInfo, args: ProjectTeamsArgs): Promise<TeamProject[]>;
}
