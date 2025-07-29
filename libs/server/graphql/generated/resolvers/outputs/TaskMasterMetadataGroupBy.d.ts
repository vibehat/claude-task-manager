import { TaskMasterMetadataAvgAggregate } from "../outputs/TaskMasterMetadataAvgAggregate";
import { TaskMasterMetadataCountAggregate } from "../outputs/TaskMasterMetadataCountAggregate";
import { TaskMasterMetadataMaxAggregate } from "../outputs/TaskMasterMetadataMaxAggregate";
import { TaskMasterMetadataMinAggregate } from "../outputs/TaskMasterMetadataMinAggregate";
import { TaskMasterMetadataSumAggregate } from "../outputs/TaskMasterMetadataSumAggregate";
export declare class TaskMasterMetadataGroupBy {
    id: number;
    created: Date;
    updated: Date;
    description: string;
    _count: TaskMasterMetadataCountAggregate | null;
    _avg: TaskMasterMetadataAvgAggregate | null;
    _sum: TaskMasterMetadataSumAggregate | null;
    _min: TaskMasterMetadataMinAggregate | null;
    _max: TaskMasterMetadataMaxAggregate | null;
}
