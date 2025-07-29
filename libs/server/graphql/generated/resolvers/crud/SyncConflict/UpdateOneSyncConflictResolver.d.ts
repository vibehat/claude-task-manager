import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneSyncConflictArgs } from "./args/UpdateOneSyncConflictArgs";
import { SyncConflict } from "../../../models/SyncConflict";
export declare class UpdateOneSyncConflictResolver {
    updateOneSyncConflict(ctx: any, info: GraphQLResolveInfo, args: UpdateOneSyncConflictArgs): Promise<SyncConflict | null>;
}
