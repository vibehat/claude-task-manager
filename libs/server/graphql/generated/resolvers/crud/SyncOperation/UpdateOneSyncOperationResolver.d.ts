import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneSyncOperationArgs } from "./args/UpdateOneSyncOperationArgs";
import { SyncOperation } from "../../../models/SyncOperation";
export declare class UpdateOneSyncOperationResolver {
    updateOneSyncOperation(ctx: any, info: GraphQLResolveInfo, args: UpdateOneSyncOperationArgs): Promise<SyncOperation | null>;
}
