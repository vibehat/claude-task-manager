import { IssuePriorityOrderByWithAggregationInput } from "../../../inputs/IssuePriorityOrderByWithAggregationInput";
import { IssuePriorityScalarWhereWithAggregatesInput } from "../../../inputs/IssuePriorityScalarWhereWithAggregatesInput";
import { IssuePriorityWhereInput } from "../../../inputs/IssuePriorityWhereInput";
export declare class GroupByIssuePriorityArgs {
    where?: IssuePriorityWhereInput | undefined;
    orderBy?: IssuePriorityOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "iconName" | "order" | "createdAt" | "updatedAt">;
    having?: IssuePriorityScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
