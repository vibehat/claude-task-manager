import { SortOrderInput } from "../inputs/SortOrderInput";
import { SyncOperationAvgOrderByAggregateInput } from "../inputs/SyncOperationAvgOrderByAggregateInput";
import { SyncOperationCountOrderByAggregateInput } from "../inputs/SyncOperationCountOrderByAggregateInput";
import { SyncOperationMaxOrderByAggregateInput } from "../inputs/SyncOperationMaxOrderByAggregateInput";
import { SyncOperationMinOrderByAggregateInput } from "../inputs/SyncOperationMinOrderByAggregateInput";
import { SyncOperationSumOrderByAggregateInput } from "../inputs/SyncOperationSumOrderByAggregateInput";
export declare class SyncOperationOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    source?: "asc" | "desc" | undefined;
    timestamp?: "asc" | "desc" | undefined;
    completedAt?: SortOrderInput | undefined;
    data?: "asc" | "desc" | undefined;
    rollbackData?: SortOrderInput | undefined;
    metadata?: SortOrderInput | undefined;
    retryCount?: "asc" | "desc" | undefined;
    maxRetries?: "asc" | "desc" | undefined;
    error?: SortOrderInput | undefined;
    taskIds?: "asc" | "desc" | undefined;
    _count?: SyncOperationCountOrderByAggregateInput | undefined;
    _avg?: SyncOperationAvgOrderByAggregateInput | undefined;
    _max?: SyncOperationMaxOrderByAggregateInput | undefined;
    _min?: SyncOperationMinOrderByAggregateInput | undefined;
    _sum?: SyncOperationSumOrderByAggregateInput | undefined;
}
