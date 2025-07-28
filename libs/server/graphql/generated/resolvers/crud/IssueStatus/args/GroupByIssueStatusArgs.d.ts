import { IssueStatusOrderByWithAggregationInput } from "../../../inputs/IssueStatusOrderByWithAggregationInput";
import { IssueStatusScalarWhereWithAggregatesInput } from "../../../inputs/IssueStatusScalarWhereWithAggregatesInput";
import { IssueStatusWhereInput } from "../../../inputs/IssueStatusWhereInput";
export declare class GroupByIssueStatusArgs {
    where?: IssueStatusWhereInput | undefined;
    orderBy?: IssueStatusOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "color" | "iconName" | "createdAt" | "updatedAt">;
    having?: IssueStatusScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
