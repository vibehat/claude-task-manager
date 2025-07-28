import { SyncOperationOrderByWithRelationInput } from "../../../inputs/SyncOperationOrderByWithRelationInput";
import { SyncOperationWhereInput } from "../../../inputs/SyncOperationWhereInput";
import { SyncOperationWhereUniqueInput } from "../../../inputs/SyncOperationWhereUniqueInput";
export declare class AggregateSyncOperationArgs {
    where?: SyncOperationWhereInput | undefined;
    orderBy?: SyncOperationOrderByWithRelationInput[] | undefined;
    cursor?: SyncOperationWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
