import { ProjectCountIssuesArgs } from "./args/ProjectCountIssuesArgs";
import { ProjectCountTeamsArgs } from "./args/ProjectCountTeamsArgs";
export declare class ProjectCount {
    issues: number;
    teams: number;
    getIssues(root: ProjectCount, args: ProjectCountIssuesArgs): number;
    getTeams(root: ProjectCount, args: ProjectCountTeamsArgs): number;
}
