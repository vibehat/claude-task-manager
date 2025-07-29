import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSyncOperationArgs } from "./args/FindFirstSyncOperationArgs";
import { SyncOperation } from "../../../models/SyncOperation";
export declare class FindFirstSyncOperationResolver {
    findFirstSyncOperation(ctx: any, info: GraphQLResolveInfo, args: FindFirstSyncOperationArgs): Promise<SyncOperation | null>;
}
