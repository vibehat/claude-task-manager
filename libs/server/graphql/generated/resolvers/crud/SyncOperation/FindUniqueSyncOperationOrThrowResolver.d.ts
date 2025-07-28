import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueSyncOperationOrThrowArgs } from "./args/FindUniqueSyncOperationOrThrowArgs";
import { SyncOperation } from "../../../models/SyncOperation";
export declare class FindUniqueSyncOperationOrThrowResolver {
    getSyncOperation(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSyncOperationOrThrowArgs): Promise<SyncOperation | null>;
}
