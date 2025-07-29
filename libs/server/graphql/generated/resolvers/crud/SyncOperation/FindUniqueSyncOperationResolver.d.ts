import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueSyncOperationArgs } from "./args/FindUniqueSyncOperationArgs";
import { SyncOperation } from "../../../models/SyncOperation";
export declare class FindUniqueSyncOperationResolver {
    syncOperation(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSyncOperationArgs): Promise<SyncOperation | null>;
}
