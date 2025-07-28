import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneSyncOperationArgs } from "./args/DeleteOneSyncOperationArgs";
import { SyncOperation } from "../../../models/SyncOperation";
export declare class DeleteOneSyncOperationResolver {
    deleteOneSyncOperation(ctx: any, info: GraphQLResolveInfo, args: DeleteOneSyncOperationArgs): Promise<SyncOperation | null>;
}
