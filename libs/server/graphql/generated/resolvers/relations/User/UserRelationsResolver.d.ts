import type { GraphQLResolveInfo } from "graphql";
import { Issue } from "../../../models/Issue";
import { Project } from "../../../models/Project";
import { TeamMember } from "../../../models/TeamMember";
import { User } from "../../../models/User";
import { UserAssignedIssuesArgs } from "./args/UserAssignedIssuesArgs";
import { UserLedProjectsArgs } from "./args/UserLedProjectsArgs";
import { UserTeamsArgs } from "./args/UserTeamsArgs";
export declare class UserRelationsResolver {
    assignedIssues(user: User, ctx: any, info: GraphQLResolveInfo, args: UserAssignedIssuesArgs): Promise<Issue[]>;
    teams(user: User, ctx: any, info: GraphQLResolveInfo, args: UserTeamsArgs): Promise<TeamMember[]>;
    ledProjects(user: User, ctx: any, info: GraphQLResolveInfo, args: UserLedProjectsArgs): Promise<Project[]>;
}
