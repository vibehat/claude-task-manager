import { BoolFilter } from "../inputs/BoolFilter";
import { CycleListRelationFilter } from "../inputs/CycleListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TeamMemberListRelationFilter } from "../inputs/TeamMemberListRelationFilter";
import { TeamProjectListRelationFilter } from "../inputs/TeamProjectListRelationFilter";
import { TeamWhereInput } from "../inputs/TeamWhereInput";
export declare class TeamWhereUniqueInput {
    id?: string | undefined;
    AND?: TeamWhereInput[] | undefined;
    OR?: TeamWhereInput[] | undefined;
    NOT?: TeamWhereInput[] | undefined;
    name?: StringFilter | undefined;
    icon?: StringFilter | undefined;
    joined?: BoolFilter | undefined;
    color?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    members?: TeamMemberListRelationFilter | undefined;
    projects?: TeamProjectListRelationFilter | undefined;
    cycles?: CycleListRelationFilter | undefined;
}
