import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTaskMasterMetadataOrThrowArgs } from "./args/FindUniqueTaskMasterMetadataOrThrowArgs";
import { TaskMasterMetadata } from "../../../models/TaskMasterMetadata";
export declare class FindUniqueTaskMasterMetadataOrThrowResolver {
    findUniqueTaskMasterMetadataOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTaskMasterMetadataOrThrowArgs): Promise<TaskMasterMetadata | null>;
}
