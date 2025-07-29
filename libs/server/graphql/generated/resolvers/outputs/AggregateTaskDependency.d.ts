import { TaskDependencyAvgAggregate } from "../outputs/TaskDependencyAvgAggregate";
import { TaskDependencyCountAggregate } from "../outputs/TaskDependencyCountAggregate";
import { TaskDependencyMaxAggregate } from "../outputs/TaskDependencyMaxAggregate";
import { TaskDependencyMinAggregate } from "../outputs/TaskDependencyMinAggregate";
import { TaskDependencySumAggregate } from "../outputs/TaskDependencySumAggregate";
export declare class AggregateTaskDependency {
    _count: TaskDependencyCountAggregate | null;
    _avg: TaskDependencyAvgAggregate | null;
    _sum: TaskDependencySumAggregate | null;
    _min: TaskDependencyMinAggregate | null;
    _max: TaskDependencyMaxAggregate | null;
}
