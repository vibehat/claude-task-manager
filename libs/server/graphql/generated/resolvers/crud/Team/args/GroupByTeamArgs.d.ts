import { TeamOrderByWithAggregationInput } from "../../../inputs/TeamOrderByWithAggregationInput";
import { TeamScalarWhereWithAggregatesInput } from "../../../inputs/TeamScalarWhereWithAggregatesInput";
import { TeamWhereInput } from "../../../inputs/TeamWhereInput";
export declare class GroupByTeamArgs {
    where?: TeamWhereInput | undefined;
    orderBy?: TeamOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "icon" | "joined" | "color" | "createdAt" | "updatedAt">;
    having?: TeamScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
