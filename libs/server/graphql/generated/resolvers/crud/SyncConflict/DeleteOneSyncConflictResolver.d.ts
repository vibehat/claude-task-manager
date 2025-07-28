import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneSyncConflictArgs } from "./args/DeleteOneSyncConflictArgs";
import { SyncConflict } from "../../../models/SyncConflict";
export declare class DeleteOneSyncConflictResolver {
    deleteOneSyncConflict(ctx: any, info: GraphQLResolveInfo, args: DeleteOneSyncConflictArgs): Promise<SyncConflict | null>;
}
