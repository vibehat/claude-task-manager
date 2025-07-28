export declare class SyncConflictCreateManyInput {
    id?: string | undefined;
    operationType: string;
    taskId: string;
    uiVersion: string;
    cliVersion: string;
    resolved?: boolean | undefined;
    resolution?: string | undefined;
    resolvedAt?: Date | undefined;
    resolvedBy?: string | undefined;
    timestamp?: Date | undefined;
}
