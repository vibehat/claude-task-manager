import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TaskMasterMetadataWhereInput } from "../inputs/TaskMasterMetadataWhereInput";
export declare class TaskMasterMetadataWhereUniqueInput {
    id?: number | undefined;
    AND?: TaskMasterMetadataWhereInput[] | undefined;
    OR?: TaskMasterMetadataWhereInput[] | undefined;
    NOT?: TaskMasterMetadataWhereInput[] | undefined;
    created?: DateTimeFilter | undefined;
    updated?: DateTimeFilter | undefined;
    description?: StringFilter | undefined;
}
