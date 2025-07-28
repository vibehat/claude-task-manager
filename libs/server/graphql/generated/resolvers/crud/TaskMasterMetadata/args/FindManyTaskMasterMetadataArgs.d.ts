import { TaskMasterMetadataOrderByWithRelationInput } from "../../../inputs/TaskMasterMetadataOrderByWithRelationInput";
import { TaskMasterMetadataWhereInput } from "../../../inputs/TaskMasterMetadataWhereInput";
import { TaskMasterMetadataWhereUniqueInput } from "../../../inputs/TaskMasterMetadataWhereUniqueInput";
export declare class FindManyTaskMasterMetadataArgs {
    where?: TaskMasterMetadataWhereInput | undefined;
    orderBy?: TaskMasterMetadataOrderByWithRelationInput[] | undefined;
    cursor?: TaskMasterMetadataWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "created" | "updated" | "description"> | undefined;
}
