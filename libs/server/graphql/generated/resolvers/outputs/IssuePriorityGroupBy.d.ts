import { IssuePriorityAvgAggregate } from "../outputs/IssuePriorityAvgAggregate";
import { IssuePriorityCountAggregate } from "../outputs/IssuePriorityCountAggregate";
import { IssuePriorityMaxAggregate } from "../outputs/IssuePriorityMaxAggregate";
import { IssuePriorityMinAggregate } from "../outputs/IssuePriorityMinAggregate";
import { IssuePrioritySumAggregate } from "../outputs/IssuePrioritySumAggregate";
export declare class IssuePriorityGroupBy {
    id: string;
    name: string;
    iconName: string;
    order: number;
    createdAt: Date;
    updatedAt: Date;
    _count: IssuePriorityCountAggregate | null;
    _avg: IssuePriorityAvgAggregate | null;
    _sum: IssuePrioritySumAggregate | null;
    _min: IssuePriorityMinAggregate | null;
    _max: IssuePriorityMaxAggregate | null;
}
