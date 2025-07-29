import { LabelCountAggregate } from "../outputs/LabelCountAggregate";
import { LabelMaxAggregate } from "../outputs/LabelMaxAggregate";
import { LabelMinAggregate } from "../outputs/LabelMinAggregate";
export declare class LabelGroupBy {
    id: string;
    name: string;
    color: string;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: LabelCountAggregate | null;
    _min: LabelMinAggregate | null;
    _max: LabelMaxAggregate | null;
}
