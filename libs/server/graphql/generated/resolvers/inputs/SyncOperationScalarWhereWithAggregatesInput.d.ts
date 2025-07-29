import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class SyncOperationScalarWhereWithAggregatesInput {
    AND?: SyncOperationScalarWhereWithAggregatesInput[] | undefined;
    OR?: SyncOperationScalarWhereWithAggregatesInput[] | undefined;
    NOT?: SyncOperationScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    type?: StringWithAggregatesFilter | undefined;
    status?: StringWithAggregatesFilter | undefined;
    source?: StringWithAggregatesFilter | undefined;
    timestamp?: DateTimeWithAggregatesFilter | undefined;
    completedAt?: DateTimeNullableWithAggregatesFilter | undefined;
    data?: StringWithAggregatesFilter | undefined;
    rollbackData?: StringNullableWithAggregatesFilter | undefined;
    metadata?: StringNullableWithAggregatesFilter | undefined;
    retryCount?: IntWithAggregatesFilter | undefined;
    maxRetries?: IntWithAggregatesFilter | undefined;
    error?: StringNullableWithAggregatesFilter | undefined;
    taskIds?: StringWithAggregatesFilter | undefined;
}
