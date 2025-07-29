import { ProjectRelationFilter } from "../inputs/ProjectRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TeamProjectTeamIdProjectIdCompoundUniqueInput } from "../inputs/TeamProjectTeamIdProjectIdCompoundUniqueInput";
import { TeamProjectWhereInput } from "../inputs/TeamProjectWhereInput";
import { TeamRelationFilter } from "../inputs/TeamRelationFilter";
export declare class TeamProjectWhereUniqueInput {
    id?: string | undefined;
    teamId_projectId?: TeamProjectTeamIdProjectIdCompoundUniqueInput | undefined;
    AND?: TeamProjectWhereInput[] | undefined;
    OR?: TeamProjectWhereInput[] | undefined;
    NOT?: TeamProjectWhereInput[] | undefined;
    teamId?: StringFilter | undefined;
    projectId?: StringFilter | undefined;
    team?: TeamRelationFilter | undefined;
    project?: ProjectRelationFilter | undefined;
}
