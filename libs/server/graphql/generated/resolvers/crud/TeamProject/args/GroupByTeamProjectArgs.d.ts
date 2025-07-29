import { TeamProjectOrderByWithAggregationInput } from "../../../inputs/TeamProjectOrderByWithAggregationInput";
import { TeamProjectScalarWhereWithAggregatesInput } from "../../../inputs/TeamProjectScalarWhereWithAggregatesInput";
import { TeamProjectWhereInput } from "../../../inputs/TeamProjectWhereInput";
export declare class GroupByTeamProjectArgs {
    where?: TeamProjectWhereInput | undefined;
    orderBy?: TeamProjectOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "teamId" | "projectId">;
    having?: TeamProjectScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
