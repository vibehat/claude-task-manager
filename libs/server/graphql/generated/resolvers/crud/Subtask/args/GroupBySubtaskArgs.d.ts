import { SubtaskOrderByWithAggregationInput } from "../../../inputs/SubtaskOrderByWithAggregationInput";
import { SubtaskScalarWhereWithAggregatesInput } from "../../../inputs/SubtaskScalarWhereWithAggregatesInput";
import { SubtaskWhereInput } from "../../../inputs/SubtaskWhereInput";
export declare class GroupBySubtaskArgs {
    where?: SubtaskWhereInput | undefined;
    orderBy?: SubtaskOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "title" | "description" | "details" | "testStrategy" | "status" | "parentId" | "dependencies" | "createdAt" | "updatedAt">;
    having?: SubtaskScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
