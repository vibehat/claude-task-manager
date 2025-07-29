import type { GraphQLResolveInfo } from "graphql";
import { CreateManyTaskMasterMetadataArgs } from "./args/CreateManyTaskMasterMetadataArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyTaskMasterMetadataResolver {
    createManyTaskMasterMetadata(ctx: any, info: GraphQLResolveInfo, args: CreateManyTaskMasterMetadataArgs): Promise<AffectedRowsOutput>;
}
