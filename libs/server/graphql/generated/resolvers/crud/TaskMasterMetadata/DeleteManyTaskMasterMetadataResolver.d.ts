import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyTaskMasterMetadataArgs } from "./args/DeleteManyTaskMasterMetadataArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyTaskMasterMetadataResolver {
    deleteManyTaskMasterMetadata(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTaskMasterMetadataArgs): Promise<AffectedRowsOutput>;
}
