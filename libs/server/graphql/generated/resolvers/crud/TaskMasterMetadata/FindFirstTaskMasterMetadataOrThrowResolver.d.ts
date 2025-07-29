import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTaskMasterMetadataOrThrowArgs } from "./args/FindFirstTaskMasterMetadataOrThrowArgs";
import { TaskMasterMetadata } from "../../../models/TaskMasterMetadata";
export declare class FindFirstTaskMasterMetadataOrThrowResolver {
    findFirstTaskMasterMetadataOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstTaskMasterMetadataOrThrowArgs): Promise<TaskMasterMetadata | null>;
}
