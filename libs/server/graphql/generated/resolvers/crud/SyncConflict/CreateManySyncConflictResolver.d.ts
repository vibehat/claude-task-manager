import type { GraphQLResolveInfo } from "graphql";
import { CreateManySyncConflictArgs } from "./args/CreateManySyncConflictArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManySyncConflictResolver {
    createManySyncConflict(ctx: any, info: GraphQLResolveInfo, args: CreateManySyncConflictArgs): Promise<AffectedRowsOutput>;
}
