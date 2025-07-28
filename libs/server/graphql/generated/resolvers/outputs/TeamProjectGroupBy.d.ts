import { TeamProjectCountAggregate } from "../outputs/TeamProjectCountAggregate";
import { TeamProjectMaxAggregate } from "../outputs/TeamProjectMaxAggregate";
import { TeamProjectMinAggregate } from "../outputs/TeamProjectMinAggregate";
export declare class TeamProjectGroupBy {
    id: string;
    teamId: string;
    projectId: string;
    _count: TeamProjectCountAggregate | null;
    _min: TeamProjectMinAggregate | null;
    _max: TeamProjectMaxAggregate | null;
}
