import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyTaskMasterMetadataArgs } from "./args/UpdateManyTaskMasterMetadataArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyTaskMasterMetadataResolver {
    updateManyTaskMasterMetadata(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTaskMasterMetadataArgs): Promise<AffectedRowsOutput>;
}
