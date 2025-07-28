import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IssueListRelationFilter } from "../inputs/IssueListRelationFilter";
import { ProjectListRelationFilter } from "../inputs/ProjectListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TeamMemberListRelationFilter } from "../inputs/TeamMemberListRelationFilter";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserWhereUniqueInput {
    id?: string | undefined;
    email?: string | undefined;
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    name?: StringFilter | undefined;
    avatarUrl?: StringNullableFilter | undefined;
    status?: StringFilter | undefined;
    role?: StringFilter | undefined;
    joinedDate?: DateTimeFilter | undefined;
    teamIds?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    assignedIssues?: IssueListRelationFilter | undefined;
    teams?: TeamMemberListRelationFilter | undefined;
    ledProjects?: ProjectListRelationFilter | undefined;
}
