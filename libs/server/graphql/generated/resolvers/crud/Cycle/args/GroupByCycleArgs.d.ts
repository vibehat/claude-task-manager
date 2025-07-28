import { CycleOrderByWithAggregationInput } from "../../../inputs/CycleOrderByWithAggregationInput";
import { CycleScalarWhereWithAggregatesInput } from "../../../inputs/CycleScalarWhereWithAggregatesInput";
import { CycleWhereInput } from "../../../inputs/CycleWhereInput";
export declare class GroupByCycleArgs {
    where?: CycleWhereInput | undefined;
    orderBy?: CycleOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "number" | "name" | "teamId" | "startDate" | "endDate" | "progress" | "createdAt" | "updatedAt">;
    having?: CycleScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
