export declare class CreateManyAndReturnSyncOperation {
    id: string;
    type: string;
    status: string;
    source: string;
    timestamp: Date;
    completedAt: Date | null;
    data: string;
    rollbackData: string | null;
    metadata: string | null;
    retryCount: number;
    maxRetries: number;
    error: string | null;
    taskIds: string;
}
