import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTaskMasterMetadataArgs } from "./args/FindUniqueTaskMasterMetadataArgs";
import { TaskMasterMetadata } from "../../../models/TaskMasterMetadata";
export declare class FindUniqueTaskMasterMetadataResolver {
    findUniqueTaskMasterMetadata(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTaskMasterMetadataArgs): Promise<TaskMasterMetadata | null>;
}
