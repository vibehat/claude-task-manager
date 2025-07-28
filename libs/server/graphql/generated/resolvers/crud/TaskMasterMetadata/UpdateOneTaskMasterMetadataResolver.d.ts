import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneTaskMasterMetadataArgs } from "./args/UpdateOneTaskMasterMetadataArgs";
import { TaskMasterMetadata } from "../../../models/TaskMasterMetadata";
export declare class UpdateOneTaskMasterMetadataResolver {
    updateOneTaskMasterMetadata(ctx: any, info: GraphQLResolveInfo, args: UpdateOneTaskMasterMetadataArgs): Promise<TaskMasterMetadata | null>;
}
