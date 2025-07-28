import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneTaskMasterMetadataArgs } from "./args/UpsertOneTaskMasterMetadataArgs";
import { TaskMasterMetadata } from "../../../models/TaskMasterMetadata";
export declare class UpsertOneTaskMasterMetadataResolver {
    upsertOneTaskMasterMetadata(ctx: any, info: GraphQLResolveInfo, args: UpsertOneTaskMasterMetadataArgs): Promise<TaskMasterMetadata>;
}
