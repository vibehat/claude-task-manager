import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IssueListRelationFilter } from "../inputs/IssueListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TeamProjectListRelationFilter } from "../inputs/TeamProjectListRelationFilter";
import { UserNullableRelationFilter } from "../inputs/UserNullableRelationFilter";
export declare class ProjectWhereInput {
    AND?: ProjectWhereInput[] | undefined;
    OR?: ProjectWhereInput[] | undefined;
    NOT?: ProjectWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    description?: StringNullableFilter | undefined;
    color?: StringNullableFilter | undefined;
    identifier?: StringNullableFilter | undefined;
    icon?: StringNullableFilter | undefined;
    percentComplete?: IntFilter | undefined;
    startDate?: DateTimeNullableFilter | undefined;
    health?: StringFilter | undefined;
    leadId?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    issues?: IssueListRelationFilter | undefined;
    lead?: UserNullableRelationFilter | undefined;
    teams?: TeamProjectListRelationFilter | undefined;
}
