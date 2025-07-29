import { TeamMemberCountAggregate } from "../outputs/TeamMemberCountAggregate";
import { TeamMemberMaxAggregate } from "../outputs/TeamMemberMaxAggregate";
import { TeamMemberMinAggregate } from "../outputs/TeamMemberMinAggregate";
export declare class TeamMemberGroupBy {
    id: string;
    teamId: string;
    userId: string;
    _count: TeamMemberCountAggregate | null;
    _min: TeamMemberMinAggregate | null;
    _max: TeamMemberMaxAggregate | null;
}
