import { SyncConflictOrderByWithRelationInput } from "../../../inputs/SyncConflictOrderByWithRelationInput";
import { SyncConflictWhereInput } from "../../../inputs/SyncConflictWhereInput";
import { SyncConflictWhereUniqueInput } from "../../../inputs/SyncConflictWhereUniqueInput";
export declare class AggregateSyncConflictArgs {
    where?: SyncConflictWhereInput | undefined;
    orderBy?: SyncConflictOrderByWithRelationInput[] | undefined;
    cursor?: SyncConflictWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
