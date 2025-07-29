import type { GraphQLResolveInfo } from "graphql";
import { FindManyTaskMasterMetadataArgs } from "./args/FindManyTaskMasterMetadataArgs";
import { TaskMasterMetadata } from "../../../models/TaskMasterMetadata";
export declare class FindManyTaskMasterMetadataResolver {
    findManyTaskMasterMetadata(ctx: any, info: GraphQLResolveInfo, args: FindManyTaskMasterMetadataArgs): Promise<TaskMasterMetadata[]>;
}
