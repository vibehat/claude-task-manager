import type { GraphQLResolveInfo } from "graphql";
import { UpdateManySyncConflictArgs } from "./args/UpdateManySyncConflictArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManySyncConflictResolver {
    updateManySyncConflict(ctx: any, info: GraphQLResolveInfo, args: UpdateManySyncConflictArgs): Promise<AffectedRowsOutput>;
}
