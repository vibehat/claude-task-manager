import type { GraphQLResolveInfo } from "graphql";
import { DeleteManySyncConflictArgs } from "./args/DeleteManySyncConflictArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManySyncConflictResolver {
    deleteManySyncConflict(ctx: any, info: GraphQLResolveInfo, args: DeleteManySyncConflictArgs): Promise<AffectedRowsOutput>;
}
