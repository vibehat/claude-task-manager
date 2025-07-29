import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSyncConflictOrThrowArgs } from "./args/FindFirstSyncConflictOrThrowArgs";
import { SyncConflict } from "../../../models/SyncConflict";
export declare class FindFirstSyncConflictOrThrowResolver {
    findFirstSyncConflictOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstSyncConflictOrThrowArgs): Promise<SyncConflict | null>;
}
