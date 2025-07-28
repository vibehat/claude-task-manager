import type { GraphQLResolveInfo } from "graphql";
import { FindManySyncOperationArgs } from "./args/FindManySyncOperationArgs";
import { SyncOperation } from "../../../models/SyncOperation";
export declare class FindManySyncOperationResolver {
    syncOperations(ctx: any, info: GraphQLResolveInfo, args: FindManySyncOperationArgs): Promise<SyncOperation[]>;
}
