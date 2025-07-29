import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { SyncConflictWhereInput } from "../inputs/SyncConflictWhereInput";
export declare class SyncConflictWhereUniqueInput {
    id?: string | undefined;
    AND?: SyncConflictWhereInput[] | undefined;
    OR?: SyncConflictWhereInput[] | undefined;
    NOT?: SyncConflictWhereInput[] | undefined;
    operationType?: StringFilter | undefined;
    taskId?: StringFilter | undefined;
    uiVersion?: StringFilter | undefined;
    cliVersion?: StringFilter | undefined;
    resolved?: BoolFilter | undefined;
    resolution?: StringNullableFilter | undefined;
    resolvedAt?: DateTimeNullableFilter | undefined;
    resolvedBy?: StringNullableFilter | undefined;
    timestamp?: DateTimeFilter | undefined;
}
