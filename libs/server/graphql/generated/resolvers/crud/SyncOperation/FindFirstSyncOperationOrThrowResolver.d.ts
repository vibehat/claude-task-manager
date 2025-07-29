import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSyncOperationOrThrowArgs } from "./args/FindFirstSyncOperationOrThrowArgs";
import { SyncOperation } from "../../../models/SyncOperation";
export declare class FindFirstSyncOperationOrThrowResolver {
    findFirstSyncOperationOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstSyncOperationOrThrowArgs): Promise<SyncOperation | null>;
}
