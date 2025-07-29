import { Project } from "../models/Project";
import { Team } from "../models/Team";
export declare class TeamProject {
    id: string;
    teamId: string;
    projectId: string;
    team?: Team;
    project?: Project;
}
