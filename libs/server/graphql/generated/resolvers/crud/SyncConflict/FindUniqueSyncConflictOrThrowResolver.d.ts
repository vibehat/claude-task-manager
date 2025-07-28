import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueSyncConflictOrThrowArgs } from "./args/FindUniqueSyncConflictOrThrowArgs";
import { SyncConflict } from "../../../models/SyncConflict";
export declare class FindUniqueSyncConflictOrThrowResolver {
    getSyncConflict(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSyncConflictOrThrowArgs): Promise<SyncConflict | null>;
}
