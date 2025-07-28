import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneSyncOperationArgs } from "./args/UpsertOneSyncOperationArgs";
import { SyncOperation } from "../../../models/SyncOperation";
export declare class UpsertOneSyncOperationResolver {
    upsertOneSyncOperation(ctx: any, info: GraphQLResolveInfo, args: UpsertOneSyncOperationArgs): Promise<SyncOperation>;
}
