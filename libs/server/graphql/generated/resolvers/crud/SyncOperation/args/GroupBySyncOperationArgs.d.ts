import { SyncOperationOrderByWithAggregationInput } from "../../../inputs/SyncOperationOrderByWithAggregationInput";
import { SyncOperationScalarWhereWithAggregatesInput } from "../../../inputs/SyncOperationScalarWhereWithAggregatesInput";
import { SyncOperationWhereInput } from "../../../inputs/SyncOperationWhereInput";
export declare class GroupBySyncOperationArgs {
    where?: SyncOperationWhereInput | undefined;
    orderBy?: SyncOperationOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "type" | "status" | "source" | "timestamp" | "completedAt" | "data" | "rollbackData" | "metadata" | "retryCount" | "maxRetries" | "error" | "taskIds">;
    having?: SyncOperationScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
