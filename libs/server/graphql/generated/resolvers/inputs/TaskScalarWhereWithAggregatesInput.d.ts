import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class TaskScalarWhereWithAggregatesInput {
    AND?: TaskScalarWhereWithAggregatesInput[] | undefined;
    OR?: TaskScalarWhereWithAggregatesInput[] | undefined;
    NOT?: TaskScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    description?: StringWithAggregatesFilter | undefined;
    details?: StringNullableWithAggregatesFilter | undefined;
    testStrategy?: StringNullableWithAggregatesFilter | undefined;
    priority?: StringWithAggregatesFilter | undefined;
    status?: StringWithAggregatesFilter | undefined;
    complexity?: IntNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
