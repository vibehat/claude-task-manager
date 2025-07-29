import type { GraphQLResolveInfo } from "graphql";
import { GroupByTaskMasterMetadataArgs } from "./args/GroupByTaskMasterMetadataArgs";
import { TaskMasterMetadataGroupBy } from "../../outputs/TaskMasterMetadataGroupBy";
export declare class GroupByTaskMasterMetadataResolver {
    groupByTaskMasterMetadata(ctx: any, info: GraphQLResolveInfo, args: GroupByTaskMasterMetadataArgs): Promise<TaskMasterMetadataGroupBy[]>;
}
