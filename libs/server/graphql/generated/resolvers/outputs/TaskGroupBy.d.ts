import { TaskAvgAggregate } from "../outputs/TaskAvgAggregate";
import { TaskCountAggregate } from "../outputs/TaskCountAggregate";
import { TaskMaxAggregate } from "../outputs/TaskMaxAggregate";
import { TaskMinAggregate } from "../outputs/TaskMinAggregate";
import { TaskSumAggregate } from "../outputs/TaskSumAggregate";
export declare class TaskGroupBy {
    id: number;
    title: string;
    description: string;
    details: string | null;
    testStrategy: string | null;
    priority: string;
    status: string;
    complexity: number | null;
    createdAt: Date;
    updatedAt: Date;
    _count: TaskCountAggregate | null;
    _avg: TaskAvgAggregate | null;
    _sum: TaskSumAggregate | null;
    _min: TaskMinAggregate | null;
    _max: TaskMaxAggregate | null;
}
