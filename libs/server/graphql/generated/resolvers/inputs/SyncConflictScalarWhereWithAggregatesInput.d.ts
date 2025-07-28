import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class SyncConflictScalarWhereWithAggregatesInput {
    AND?: SyncConflictScalarWhereWithAggregatesInput[] | undefined;
    OR?: SyncConflictScalarWhereWithAggregatesInput[] | undefined;
    NOT?: SyncConflictScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    operationType?: StringWithAggregatesFilter | undefined;
    taskId?: StringWithAggregatesFilter | undefined;
    uiVersion?: StringWithAggregatesFilter | undefined;
    cliVersion?: StringWithAggregatesFilter | undefined;
    resolved?: BoolWithAggregatesFilter | undefined;
    resolution?: StringNullableWithAggregatesFilter | undefined;
    resolvedAt?: DateTimeNullableWithAggregatesFilter | undefined;
    resolvedBy?: StringNullableWithAggregatesFilter | undefined;
    timestamp?: DateTimeWithAggregatesFilter | undefined;
}
