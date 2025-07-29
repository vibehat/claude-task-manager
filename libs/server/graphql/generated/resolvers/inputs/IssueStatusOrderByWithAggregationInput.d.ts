import { IssueStatusCountOrderByAggregateInput } from "../inputs/IssueStatusCountOrderByAggregateInput";
import { IssueStatusMaxOrderByAggregateInput } from "../inputs/IssueStatusMaxOrderByAggregateInput";
import { IssueStatusMinOrderByAggregateInput } from "../inputs/IssueStatusMinOrderByAggregateInput";
export declare class IssueStatusOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    color?: "asc" | "desc" | undefined;
    iconName?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: IssueStatusCountOrderByAggregateInput | undefined;
    _max?: IssueStatusMaxOrderByAggregateInput | undefined;
    _min?: IssueStatusMinOrderByAggregateInput | undefined;
}
