import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class SyncOperationOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    source?: "asc" | "desc" | undefined;
    timestamp?: "asc" | "desc" | undefined;
    completedAt?: SortOrderInput | undefined;
    data?: "asc" | "desc" | undefined;
    rollbackData?: SortOrderInput | undefined;
    metadata?: SortOrderInput | undefined;
    retryCount?: "asc" | "desc" | undefined;
    maxRetries?: "asc" | "desc" | undefined;
    error?: SortOrderInput | undefined;
    taskIds?: "asc" | "desc" | undefined;
}
