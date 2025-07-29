import { ProjectAvgOrderByAggregateInput } from "../inputs/ProjectAvgOrderByAggregateInput";
import { ProjectCountOrderByAggregateInput } from "../inputs/ProjectCountOrderByAggregateInput";
import { ProjectMaxOrderByAggregateInput } from "../inputs/ProjectMaxOrderByAggregateInput";
import { ProjectMinOrderByAggregateInput } from "../inputs/ProjectMinOrderByAggregateInput";
import { ProjectSumOrderByAggregateInput } from "../inputs/ProjectSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class ProjectOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    description?: SortOrderInput | undefined;
    color?: SortOrderInput | undefined;
    identifier?: SortOrderInput | undefined;
    icon?: SortOrderInput | undefined;
    percentComplete?: "asc" | "desc" | undefined;
    startDate?: SortOrderInput | undefined;
    health?: "asc" | "desc" | undefined;
    leadId?: SortOrderInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: ProjectCountOrderByAggregateInput | undefined;
    _avg?: ProjectAvgOrderByAggregateInput | undefined;
    _max?: ProjectMaxOrderByAggregateInput | undefined;
    _min?: ProjectMinOrderByAggregateInput | undefined;
    _sum?: ProjectSumOrderByAggregateInput | undefined;
}
