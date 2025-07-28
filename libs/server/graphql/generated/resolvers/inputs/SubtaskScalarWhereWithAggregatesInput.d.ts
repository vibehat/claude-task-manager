import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class SubtaskScalarWhereWithAggregatesInput {
    AND?: SubtaskScalarWhereWithAggregatesInput[] | undefined;
    OR?: SubtaskScalarWhereWithAggregatesInput[] | undefined;
    NOT?: SubtaskScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    description?: StringWithAggregatesFilter | undefined;
    details?: StringNullableWithAggregatesFilter | undefined;
    testStrategy?: StringNullableWithAggregatesFilter | undefined;
    status?: StringWithAggregatesFilter | undefined;
    parentId?: IntWithAggregatesFilter | undefined;
    dependencies?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
