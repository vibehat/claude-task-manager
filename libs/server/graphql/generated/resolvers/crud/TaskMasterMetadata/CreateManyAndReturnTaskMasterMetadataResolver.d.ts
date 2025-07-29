import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnTaskMasterMetadataArgs } from "./args/CreateManyAndReturnTaskMasterMetadataArgs";
import { CreateManyAndReturnTaskMasterMetadata } from "../../outputs/CreateManyAndReturnTaskMasterMetadata";
export declare class CreateManyAndReturnTaskMasterMetadataResolver {
    createManyAndReturnTaskMasterMetadata(ctx: any, info: GraphQLResolveInfo, args: CreateManyAndReturnTaskMasterMetadataArgs): Promise<CreateManyAndReturnTaskMasterMetadata[]>;
}
