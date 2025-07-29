import { LabelCountAggregate } from "../outputs/LabelCountAggregate";
import { LabelMaxAggregate } from "../outputs/LabelMaxAggregate";
import { LabelMinAggregate } from "../outputs/LabelMinAggregate";
export declare class AggregateLabel {
    _count: LabelCountAggregate | null;
    _min: LabelMinAggregate | null;
    _max: LabelMaxAggregate | null;
}
