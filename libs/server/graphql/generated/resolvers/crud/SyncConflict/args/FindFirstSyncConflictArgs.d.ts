import { SyncConflictOrderByWithRelationInput } from "../../../inputs/SyncConflictOrderByWithRelationInput";
import { SyncConflictWhereInput } from "../../../inputs/SyncConflictWhereInput";
import { SyncConflictWhereUniqueInput } from "../../../inputs/SyncConflictWhereUniqueInput";
export declare class FindFirstSyncConflictArgs {
    where?: SyncConflictWhereInput | undefined;
    orderBy?: SyncConflictOrderByWithRelationInput[] | undefined;
    cursor?: SyncConflictWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "operationType" | "taskId" | "uiVersion" | "cliVersion" | "resolved" | "resolution" | "resolvedAt" | "resolvedBy" | "timestamp"> | undefined;
}
