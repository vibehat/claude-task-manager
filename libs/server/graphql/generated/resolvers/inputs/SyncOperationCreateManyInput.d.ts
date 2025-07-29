export declare class SyncOperationCreateManyInput {
    id?: string | undefined;
    type: string;
    status: string;
    source: string;
    timestamp?: Date | undefined;
    completedAt?: Date | undefined;
    data: string;
    rollbackData?: string | undefined;
    metadata?: string | undefined;
    retryCount?: number | undefined;
    maxRetries?: number | undefined;
    error?: string | undefined;
    taskIds?: string | undefined;
}
