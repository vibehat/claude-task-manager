import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ProjectScalarWhereWithAggregatesInput {
    AND?: ProjectScalarWhereWithAggregatesInput[] | undefined;
    OR?: ProjectScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ProjectScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    color?: StringNullableWithAggregatesFilter | undefined;
    identifier?: StringNullableWithAggregatesFilter | undefined;
    icon?: StringNullableWithAggregatesFilter | undefined;
    percentComplete?: IntWithAggregatesFilter | undefined;
    startDate?: DateTimeNullableWithAggregatesFilter | undefined;
    health?: StringWithAggregatesFilter | undefined;
    leadId?: StringNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
