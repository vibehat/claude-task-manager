import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class SyncOperationWhereInput {
    AND?: SyncOperationWhereInput[] | undefined;
    OR?: SyncOperationWhereInput[] | undefined;
    NOT?: SyncOperationWhereInput[] | undefined;
    id?: StringFilter | undefined;
    type?: StringFilter | undefined;
    status?: StringFilter | undefined;
    source?: StringFilter | undefined;
    timestamp?: DateTimeFilter | undefined;
    completedAt?: DateTimeNullableFilter | undefined;
    data?: StringFilter | undefined;
    rollbackData?: StringNullableFilter | undefined;
    metadata?: StringNullableFilter | undefined;
    retryCount?: IntFilter | undefined;
    maxRetries?: IntFilter | undefined;
    error?: StringNullableFilter | undefined;
    taskIds?: StringFilter | undefined;
}
