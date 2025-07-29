import type { GraphQLResolveInfo } from "graphql";
import { GroupBySyncConflictArgs } from "./args/GroupBySyncConflictArgs";
import { SyncConflictGroupBy } from "../../outputs/SyncConflictGroupBy";
export declare class GroupBySyncConflictResolver {
    groupBySyncConflict(ctx: any, info: GraphQLResolveInfo, args: GroupBySyncConflictArgs): Promise<SyncConflictGroupBy[]>;
}
