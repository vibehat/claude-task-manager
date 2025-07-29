import { StringFilter } from "../inputs/StringFilter";
export declare class TeamMemberScalarWhereInput {
    AND?: TeamMemberScalarWhereInput[] | undefined;
    OR?: TeamMemberScalarWhereInput[] | undefined;
    NOT?: TeamMemberScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    teamId?: StringFilter | undefined;
    userId?: StringFilter | undefined;
}
