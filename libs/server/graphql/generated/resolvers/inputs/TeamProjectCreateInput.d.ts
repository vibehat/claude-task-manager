import { ProjectCreateNestedOneWithoutTeamsInput } from "../inputs/ProjectCreateNestedOneWithoutTeamsInput";
import { TeamCreateNestedOneWithoutProjectsInput } from "../inputs/TeamCreateNestedOneWithoutProjectsInput";
export declare class TeamProjectCreateInput {
    id?: string | undefined;
    team: TeamCreateNestedOneWithoutProjectsInput;
    project: ProjectCreateNestedOneWithoutTeamsInput;
}
