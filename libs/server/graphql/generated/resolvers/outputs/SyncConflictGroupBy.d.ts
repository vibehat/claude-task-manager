import { SyncConflictCountAggregate } from "../outputs/SyncConflictCountAggregate";
import { SyncConflictMaxAggregate } from "../outputs/SyncConflictMaxAggregate";
import { SyncConflictMinAggregate } from "../outputs/SyncConflictMinAggregate";
export declare class SyncConflictGroupBy {
    id: string;
    operationType: string;
    taskId: string;
    uiVersion: string;
    cliVersion: string;
    resolved: boolean;
    resolution: string | null;
    resolvedAt: Date | null;
    resolvedBy: string | null;
    timestamp: Date;
    _count: SyncConflictCountAggregate | null;
    _min: SyncConflictMinAggregate | null;
    _max: SyncConflictMaxAggregate | null;
}
