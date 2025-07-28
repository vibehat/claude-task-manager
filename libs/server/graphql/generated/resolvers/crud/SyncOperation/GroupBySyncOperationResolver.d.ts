import type { GraphQLResolveInfo } from "graphql";
import { GroupBySyncOperationArgs } from "./args/GroupBySyncOperationArgs";
import { SyncOperationGroupBy } from "../../outputs/SyncOperationGroupBy";
export declare class GroupBySyncOperationResolver {
    groupBySyncOperation(ctx: any, info: GraphQLResolveInfo, args: GroupBySyncOperationArgs): Promise<SyncOperationGroupBy[]>;
}
