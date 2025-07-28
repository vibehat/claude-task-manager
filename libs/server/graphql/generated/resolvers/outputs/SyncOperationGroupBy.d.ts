import { SyncOperationAvgAggregate } from "../outputs/SyncOperationAvgAggregate";
import { SyncOperationCountAggregate } from "../outputs/SyncOperationCountAggregate";
import { SyncOperationMaxAggregate } from "../outputs/SyncOperationMaxAggregate";
import { SyncOperationMinAggregate } from "../outputs/SyncOperationMinAggregate";
import { SyncOperationSumAggregate } from "../outputs/SyncOperationSumAggregate";
export declare class SyncOperationGroupBy {
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
    _count: SyncOperationCountAggregate | null;
    _avg: SyncOperationAvgAggregate | null;
    _sum: SyncOperationSumAggregate | null;
    _min: SyncOperationMinAggregate | null;
    _max: SyncOperationMaxAggregate | null;
}
