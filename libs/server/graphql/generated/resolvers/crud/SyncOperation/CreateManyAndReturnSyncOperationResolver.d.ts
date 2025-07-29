import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnSyncOperationArgs } from "./args/CreateManyAndReturnSyncOperationArgs";
import { CreateManyAndReturnSyncOperation } from "../../outputs/CreateManyAndReturnSyncOperation";
export declare class CreateManyAndReturnSyncOperationResolver {
    createManyAndReturnSyncOperation(ctx: any, info: GraphQLResolveInfo, args: CreateManyAndReturnSyncOperationArgs): Promise<CreateManyAndReturnSyncOperation[]>;
}
