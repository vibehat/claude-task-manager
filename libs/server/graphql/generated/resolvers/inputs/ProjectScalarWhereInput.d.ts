import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ProjectScalarWhereInput {
    AND?: ProjectScalarWhereInput[] | undefined;
    OR?: ProjectScalarWhereInput[] | undefined;
    NOT?: ProjectScalarWhereInput[] | undefined;
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
}
