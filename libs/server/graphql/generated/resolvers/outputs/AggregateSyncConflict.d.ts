import { SyncConflictCountAggregate } from "../outputs/SyncConflictCountAggregate";
import { SyncConflictMaxAggregate } from "../outputs/SyncConflictMaxAggregate";
import { SyncConflictMinAggregate } from "../outputs/SyncConflictMinAggregate";
export declare class AggregateSyncConflict {
    _count: SyncConflictCountAggregate | null;
    _min: SyncConflictMinAggregate | null;
    _max: SyncConflictMaxAggregate | null;
}
