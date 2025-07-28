import { SyncOperationOrderByWithRelationInput } from "../../../inputs/SyncOperationOrderByWithRelationInput";
import { SyncOperationWhereInput } from "../../../inputs/SyncOperationWhereInput";
import { SyncOperationWhereUniqueInput } from "../../../inputs/SyncOperationWhereUniqueInput";
export declare class FindFirstSyncOperationArgs {
    where?: SyncOperationWhereInput | undefined;
    orderBy?: SyncOperationOrderByWithRelationInput[] | undefined;
    cursor?: SyncOperationWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "type" | "status" | "source" | "timestamp" | "completedAt" | "data" | "rollbackData" | "metadata" | "retryCount" | "maxRetries" | "error" | "taskIds"> | undefined;
}
