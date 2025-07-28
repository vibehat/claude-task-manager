import { TeamMemberOrderByWithAggregationInput } from "../../../inputs/TeamMemberOrderByWithAggregationInput";
import { TeamMemberScalarWhereWithAggregatesInput } from "../../../inputs/TeamMemberScalarWhereWithAggregatesInput";
import { TeamMemberWhereInput } from "../../../inputs/TeamMemberWhereInput";
export declare class GroupByTeamMemberArgs {
    where?: TeamMemberWhereInput | undefined;
    orderBy?: TeamMemberOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "teamId" | "userId">;
    having?: TeamMemberScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
