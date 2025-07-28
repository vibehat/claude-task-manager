import type { GraphQLResolveInfo } from "graphql";
import { CreateOneTaskMasterMetadataArgs } from "./args/CreateOneTaskMasterMetadataArgs";
import { TaskMasterMetadata } from "../../../models/TaskMasterMetadata";
export declare class CreateOneTaskMasterMetadataResolver {
    createOneTaskMasterMetadata(ctx: any, info: GraphQLResolveInfo, args: CreateOneTaskMasterMetadataArgs): Promise<TaskMasterMetadata>;
}
