import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class SubtaskScalarWhereInput {
    AND?: SubtaskScalarWhereInput[] | undefined;
    OR?: SubtaskScalarWhereInput[] | undefined;
    NOT?: SubtaskScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    title?: StringFilter | undefined;
    description?: StringFilter | undefined;
    details?: StringNullableFilter | undefined;
    testStrategy?: StringNullableFilter | undefined;
    status?: StringFilter | undefined;
    parentId?: IntFilter | undefined;
    dependencies?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
