import { LabelOrderByWithAggregationInput } from "../../../inputs/LabelOrderByWithAggregationInput";
import { LabelScalarWhereWithAggregatesInput } from "../../../inputs/LabelScalarWhereWithAggregatesInput";
import { LabelWhereInput } from "../../../inputs/LabelWhereInput";
export declare class GroupByLabelArgs {
    where?: LabelWhereInput | undefined;
    orderBy?: LabelOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "color" | "description" | "createdAt" | "updatedAt">;
    having?: LabelScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
