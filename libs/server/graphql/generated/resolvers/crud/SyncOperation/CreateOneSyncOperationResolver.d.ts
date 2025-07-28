import type { GraphQLResolveInfo } from "graphql";
import { CreateOneSyncOperationArgs } from "./args/CreateOneSyncOperationArgs";
import { SyncOperation } from "../../../models/SyncOperation";
export declare class CreateOneSyncOperationResolver {
    createOneSyncOperation(ctx: any, info: GraphQLResolveInfo, args: CreateOneSyncOperationArgs): Promise<SyncOperation>;
}
