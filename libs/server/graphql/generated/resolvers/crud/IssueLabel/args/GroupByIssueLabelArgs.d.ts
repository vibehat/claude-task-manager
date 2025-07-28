import { IssueLabelOrderByWithAggregationInput } from "../../../inputs/IssueLabelOrderByWithAggregationInput";
import { IssueLabelScalarWhereWithAggregatesInput } from "../../../inputs/IssueLabelScalarWhereWithAggregatesInput";
import { IssueLabelWhereInput } from "../../../inputs/IssueLabelWhereInput";
export declare class GroupByIssueLabelArgs {
    where?: IssueLabelWhereInput | undefined;
    orderBy?: IssueLabelOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "issueId" | "labelId">;
    having?: IssueLabelScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
