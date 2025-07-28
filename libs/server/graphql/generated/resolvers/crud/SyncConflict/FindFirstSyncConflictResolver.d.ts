import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSyncConflictArgs } from "./args/FindFirstSyncConflictArgs";
import { SyncConflict } from "../../../models/SyncConflict";
export declare class FindFirstSyncConflictResolver {
    findFirstSyncConflict(ctx: any, info: GraphQLResolveInfo, args: FindFirstSyncConflictArgs): Promise<SyncConflict | null>;
}
