import { TeamMemberOrderByWithRelationInput } from "../../../inputs/TeamMemberOrderByWithRelationInput";
import { TeamMemberWhereInput } from "../../../inputs/TeamMemberWhereInput";
import { TeamMemberWhereUniqueInput } from "../../../inputs/TeamMemberWhereUniqueInput";
export declare class AggregateTeamMemberArgs {
    where?: TeamMemberWhereInput | undefined;
    orderBy?: TeamMemberOrderByWithRelationInput[] | undefined;
    cursor?: TeamMemberWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
