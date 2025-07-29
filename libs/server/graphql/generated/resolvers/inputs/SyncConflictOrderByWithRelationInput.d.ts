import { SortOrderInput } from "../inputs/SortOrderInput";
export declare class SyncConflictOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    operationType?: "asc" | "desc" | undefined;
    taskId?: "asc" | "desc" | undefined;
    uiVersion?: "asc" | "desc" | undefined;
    cliVersion?: "asc" | "desc" | undefined;
    resolved?: "asc" | "desc" | undefined;
    resolution?: SortOrderInput | undefined;
    resolvedAt?: SortOrderInput | undefined;
    resolvedBy?: SortOrderInput | undefined;
    timestamp?: "asc" | "desc" | undefined;
}
