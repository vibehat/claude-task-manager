import { StringFilter } from "../inputs/StringFilter";
export declare class TeamProjectScalarWhereInput {
    AND?: TeamProjectScalarWhereInput[] | undefined;
    OR?: TeamProjectScalarWhereInput[] | undefined;
    NOT?: TeamProjectScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    teamId?: StringFilter | undefined;
    projectId?: StringFilter | undefined;
}
