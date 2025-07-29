import { TaskMasterMetadataAvgOrderByAggregateInput } from "../inputs/TaskMasterMetadataAvgOrderByAggregateInput";
import { TaskMasterMetadataCountOrderByAggregateInput } from "../inputs/TaskMasterMetadataCountOrderByAggregateInput";
import { TaskMasterMetadataMaxOrderByAggregateInput } from "../inputs/TaskMasterMetadataMaxOrderByAggregateInput";
import { TaskMasterMetadataMinOrderByAggregateInput } from "../inputs/TaskMasterMetadataMinOrderByAggregateInput";
import { TaskMasterMetadataSumOrderByAggregateInput } from "../inputs/TaskMasterMetadataSumOrderByAggregateInput";
export declare class TaskMasterMetadataOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    created?: "asc" | "desc" | undefined;
    updated?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    _count?: TaskMasterMetadataCountOrderByAggregateInput | undefined;
    _avg?: TaskMasterMetadataAvgOrderByAggregateInput | undefined;
    _max?: TaskMasterMetadataMaxOrderByAggregateInput | undefined;
    _min?: TaskMasterMetadataMinOrderByAggregateInput | undefined;
    _sum?: TaskMasterMetadataSumOrderByAggregateInput | undefined;
}
