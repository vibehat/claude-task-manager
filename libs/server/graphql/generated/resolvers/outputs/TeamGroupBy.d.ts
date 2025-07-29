import { TeamCountAggregate } from "../outputs/TeamCountAggregate";
import { TeamMaxAggregate } from "../outputs/TeamMaxAggregate";
import { TeamMinAggregate } from "../outputs/TeamMinAggregate";
export declare class TeamGroupBy {
    id: string;
    name: string;
    icon: string;
    joined: boolean;
    color: string;
    createdAt: Date;
    updatedAt: Date;
    _count: TeamCountAggregate | null;
    _min: TeamMinAggregate | null;
    _max: TeamMaxAggregate | null;
}
