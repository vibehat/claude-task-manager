import { IssueLabelCountAggregate } from "../outputs/IssueLabelCountAggregate";
import { IssueLabelMaxAggregate } from "../outputs/IssueLabelMaxAggregate";
import { IssueLabelMinAggregate } from "../outputs/IssueLabelMinAggregate";
export declare class IssueLabelGroupBy {
    id: string;
    issueId: string;
    labelId: string;
    _count: IssueLabelCountAggregate | null;
    _min: IssueLabelMinAggregate | null;
    _max: IssueLabelMaxAggregate | null;
}
