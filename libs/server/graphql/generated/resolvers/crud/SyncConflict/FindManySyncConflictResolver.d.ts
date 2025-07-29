import type { GraphQLResolveInfo } from "graphql";
import { FindManySyncConflictArgs } from "./args/FindManySyncConflictArgs";
import { SyncConflict } from "../../../models/SyncConflict";
export declare class FindManySyncConflictResolver {
    syncConflicts(ctx: any, info: GraphQLResolveInfo, args: FindManySyncConflictArgs): Promise<SyncConflict[]>;
}
