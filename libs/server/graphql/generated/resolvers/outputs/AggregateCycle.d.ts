import { CycleAvgAggregate } from "../outputs/CycleAvgAggregate";
import { CycleCountAggregate } from "../outputs/CycleCountAggregate";
import { CycleMaxAggregate } from "../outputs/CycleMaxAggregate";
import { CycleMinAggregate } from "../outputs/CycleMinAggregate";
import { CycleSumAggregate } from "../outputs/CycleSumAggregate";
export declare class AggregateCycle {
    _count: CycleCountAggregate | null;
    _avg: CycleAvgAggregate | null;
    _sum: CycleSumAggregate | null;
    _min: CycleMinAggregate | null;
    _max: CycleMaxAggregate | null;
}
