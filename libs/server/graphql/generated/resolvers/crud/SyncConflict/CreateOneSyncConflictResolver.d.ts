import type { GraphQLResolveInfo } from "graphql";
import { CreateOneSyncConflictArgs } from "./args/CreateOneSyncConflictArgs";
import { SyncConflict } from "../../../models/SyncConflict";
export declare class CreateOneSyncConflictResolver {
    createOneSyncConflict(ctx: any, info: GraphQLResolveInfo, args: CreateOneSyncConflictArgs): Promise<SyncConflict>;
}
