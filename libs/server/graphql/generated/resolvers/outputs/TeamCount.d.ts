import { TeamCountCyclesArgs } from "./args/TeamCountCyclesArgs";
import { TeamCountMembersArgs } from "./args/TeamCountMembersArgs";
import { TeamCountProjectsArgs } from "./args/TeamCountProjectsArgs";
export declare class TeamCount {
    members: number;
    projects: number;
    cycles: number;
    getMembers(root: TeamCount, args: TeamCountMembersArgs): number;
    getProjects(root: TeamCount, args: TeamCountProjectsArgs): number;
    getCycles(root: TeamCount, args: TeamCountCyclesArgs): number;
}
