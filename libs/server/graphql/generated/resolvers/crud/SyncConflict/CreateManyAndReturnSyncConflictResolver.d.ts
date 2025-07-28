import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnSyncConflictArgs } from "./args/CreateManyAndReturnSyncConflictArgs";
import { CreateManyAndReturnSyncConflict } from "../../outputs/CreateManyAndReturnSyncConflict";
export declare class CreateManyAndReturnSyncConflictResolver {
    createManyAndReturnSyncConflict(ctx: any, info: GraphQLResolveInfo, args: CreateManyAndReturnSyncConflictArgs): Promise<CreateManyAndReturnSyncConflict[]>;
}
