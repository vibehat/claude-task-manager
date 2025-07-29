import { SyncOperationAvgAggregate } from "../outputs/SyncOperationAvgAggregate";
import { SyncOperationCountAggregate } from "../outputs/SyncOperationCountAggregate";
import { SyncOperationMaxAggregate } from "../outputs/SyncOperationMaxAggregate";
import { SyncOperationMinAggregate } from "../outputs/SyncOperationMinAggregate";
import { SyncOperationSumAggregate } from "../outputs/SyncOperationSumAggregate";
export declare class AggregateSyncOperation {
    _count: SyncOperationCountAggregate | null;
    _avg: SyncOperationAvgAggregate | null;
    _sum: SyncOperationSumAggregate | null;
    _min: SyncOperationMinAggregate | null;
    _max: SyncOperationMaxAggregate | null;
}
