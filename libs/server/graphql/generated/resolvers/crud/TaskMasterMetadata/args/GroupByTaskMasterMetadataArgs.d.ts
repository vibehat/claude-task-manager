import { TaskMasterMetadataOrderByWithAggregationInput } from "../../../inputs/TaskMasterMetadataOrderByWithAggregationInput";
import { TaskMasterMetadataScalarWhereWithAggregatesInput } from "../../../inputs/TaskMasterMetadataScalarWhereWithAggregatesInput";
import { TaskMasterMetadataWhereInput } from "../../../inputs/TaskMasterMetadataWhereInput";
export declare class GroupByTaskMasterMetadataArgs {
    where?: TaskMasterMetadataWhereInput | undefined;
    orderBy?: TaskMasterMetadataOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "created" | "updated" | "description">;
    having?: TaskMasterMetadataScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
