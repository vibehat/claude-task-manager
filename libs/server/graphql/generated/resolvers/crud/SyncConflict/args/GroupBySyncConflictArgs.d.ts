import { SyncConflictOrderByWithAggregationInput } from "../../../inputs/SyncConflictOrderByWithAggregationInput";
import { SyncConflictScalarWhereWithAggregatesInput } from "../../../inputs/SyncConflictScalarWhereWithAggregatesInput";
import { SyncConflictWhereInput } from "../../../inputs/SyncConflictWhereInput";
export declare class GroupBySyncConflictArgs {
    where?: SyncConflictWhereInput | undefined;
    orderBy?: SyncConflictOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "operationType" | "taskId" | "uiVersion" | "cliVersion" | "resolved" | "resolution" | "resolvedAt" | "resolvedBy" | "timestamp">;
    having?: SyncConflictScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
