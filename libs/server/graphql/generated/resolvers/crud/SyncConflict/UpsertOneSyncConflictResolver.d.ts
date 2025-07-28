import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneSyncConflictArgs } from "./args/UpsertOneSyncConflictArgs";
import { SyncConflict } from "../../../models/SyncConflict";
export declare class UpsertOneSyncConflictResolver {
    upsertOneSyncConflict(ctx: any, info: GraphQLResolveInfo, args: UpsertOneSyncConflictArgs): Promise<SyncConflict>;
}
