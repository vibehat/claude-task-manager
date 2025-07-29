import { TeamCountAggregate } from "../outputs/TeamCountAggregate";
import { TeamMaxAggregate } from "../outputs/TeamMaxAggregate";
import { TeamMinAggregate } from "../outputs/TeamMinAggregate";
export declare class AggregateTeam {
    _count: TeamCountAggregate | null;
    _min: TeamMinAggregate | null;
    _max: TeamMaxAggregate | null;
}
