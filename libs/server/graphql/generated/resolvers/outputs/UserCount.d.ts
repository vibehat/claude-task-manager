import { UserCountAssignedIssuesArgs } from "./args/UserCountAssignedIssuesArgs";
import { UserCountLedProjectsArgs } from "./args/UserCountLedProjectsArgs";
import { UserCountTeamsArgs } from "./args/UserCountTeamsArgs";
export declare class UserCount {
    assignedIssues: number;
    teams: number;
    ledProjects: number;
    getAssignedIssues(root: UserCount, args: UserCountAssignedIssuesArgs): number;
    getTeams(root: UserCount, args: UserCountTeamsArgs): number;
    getLedProjects(root: UserCount, args: UserCountLedProjectsArgs): number;
}
