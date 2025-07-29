import { IssueLabelCountAggregate } from "../outputs/IssueLabelCountAggregate";
import { IssueLabelMaxAggregate } from "../outputs/IssueLabelMaxAggregate";
import { IssueLabelMinAggregate } from "../outputs/IssueLabelMinAggregate";
export declare class AggregateIssueLabel {
    _count: IssueLabelCountAggregate | null;
    _min: IssueLabelMinAggregate | null;
    _max: IssueLabelMaxAggregate | null;
}
