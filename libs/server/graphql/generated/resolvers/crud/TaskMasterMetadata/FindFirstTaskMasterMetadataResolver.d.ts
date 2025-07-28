import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTaskMasterMetadataArgs } from "./args/FindFirstTaskMasterMetadataArgs";
import { TaskMasterMetadata } from "../../../models/TaskMasterMetadata";
export declare class FindFirstTaskMasterMetadataResolver {
    findFirstTaskMasterMetadata(ctx: any, info: GraphQLResolveInfo, args: FindFirstTaskMasterMetadataArgs): Promise<TaskMasterMetadata | null>;
}
