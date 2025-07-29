import { TeamMemberCountAggregate } from "../outputs/TeamMemberCountAggregate";
import { TeamMemberMaxAggregate } from "../outputs/TeamMemberMaxAggregate";
import { TeamMemberMinAggregate } from "../outputs/TeamMemberMinAggregate";
export declare class AggregateTeamMember {
    _count: TeamMemberCountAggregate | null;
    _min: TeamMemberMinAggregate | null;
    _max: TeamMemberMaxAggregate | null;
}
