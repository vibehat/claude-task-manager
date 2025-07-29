import { ProjectRelationFilter } from "../inputs/ProjectRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TeamRelationFilter } from "../inputs/TeamRelationFilter";
export declare class TeamProjectWhereInput {
    AND?: TeamProjectWhereInput[] | undefined;
    OR?: TeamProjectWhereInput[] | undefined;
    NOT?: TeamProjectWhereInput[] | undefined;
    id?: StringFilter | undefined;
    teamId?: StringFilter | undefined;
    projectId?: StringFilter | undefined;
    team?: TeamRelationFilter | undefined;
    project?: ProjectRelationFilter | undefined;
}
