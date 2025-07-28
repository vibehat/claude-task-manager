import { ProjectOrderByWithRelationInput } from "../inputs/ProjectOrderByWithRelationInput";
import { TeamOrderByWithRelationInput } from "../inputs/TeamOrderByWithRelationInput";
export declare class TeamProjectOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    teamId?: "asc" | "desc" | undefined;
    projectId?: "asc" | "desc" | undefined;
    team?: TeamOrderByWithRelationInput | undefined;
    project?: ProjectOrderByWithRelationInput | undefined;
}
