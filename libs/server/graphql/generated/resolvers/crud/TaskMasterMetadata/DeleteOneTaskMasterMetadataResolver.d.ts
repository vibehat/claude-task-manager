import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneTaskMasterMetadataArgs } from "./args/DeleteOneTaskMasterMetadataArgs";
import { TaskMasterMetadata } from "../../../models/TaskMasterMetadata";
export declare class DeleteOneTaskMasterMetadataResolver {
    deleteOneTaskMasterMetadata(ctx: any, info: GraphQLResolveInfo, args: DeleteOneTaskMasterMetadataArgs): Promise<TaskMasterMetadata | null>;
}
