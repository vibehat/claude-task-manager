import { SubtaskAvgAggregate } from "../outputs/SubtaskAvgAggregate";
import { SubtaskCountAggregate } from "../outputs/SubtaskCountAggregate";
import { SubtaskMaxAggregate } from "../outputs/SubtaskMaxAggregate";
import { SubtaskMinAggregate } from "../outputs/SubtaskMinAggregate";
import { SubtaskSumAggregate } from "../outputs/SubtaskSumAggregate";
export declare class SubtaskGroupBy {
    id: string;
    title: string;
    description: string;
    details: string | null;
    testStrategy: string | null;
    status: string;
    parentId: number;
    dependencies: string;
    createdAt: Date;
    updatedAt: Date;
    _count: SubtaskCountAggregate | null;
    _avg: SubtaskAvgAggregate | null;
    _sum: SubtaskSumAggregate | null;
    _min: SubtaskMinAggregate | null;
    _max: SubtaskMaxAggregate | null;
}
