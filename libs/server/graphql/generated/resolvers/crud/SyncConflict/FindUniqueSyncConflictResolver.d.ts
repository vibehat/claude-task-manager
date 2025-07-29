import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueSyncConflictArgs } from "./args/FindUniqueSyncConflictArgs";
import { SyncConflict } from "../../../models/SyncConflict";
export declare class FindUniqueSyncConflictResolver {
    syncConflict(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSyncConflictArgs): Promise<SyncConflict | null>;
}
