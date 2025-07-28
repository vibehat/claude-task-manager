import { TaskOrderByWithAggregationInput } from "../../../inputs/TaskOrderByWithAggregationInput";
import { TaskScalarWhereWithAggregatesInput } from "../../../inputs/TaskScalarWhereWithAggregatesInput";
import { TaskWhereInput } from "../../../inputs/TaskWhereInput";
export declare class GroupByTaskArgs {
    where?: TaskWhereInput | undefined;
    orderBy?: TaskOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "title" | "description" | "details" | "testStrategy" | "priority" | "status" | "complexity" | "createdAt" | "updatedAt">;
    having?: TaskScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
