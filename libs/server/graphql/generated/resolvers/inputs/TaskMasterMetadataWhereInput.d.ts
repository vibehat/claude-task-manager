import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class TaskMasterMetadataWhereInput {
    AND?: TaskMasterMetadataWhereInput[] | undefined;
    OR?: TaskMasterMetadataWhereInput[] | undefined;
    NOT?: TaskMasterMetadataWhereInput[] | undefined;
    id?: IntFilter | undefined;
    created?: DateTimeFilter | undefined;
    updated?: DateTimeFilter | undefined;
    description?: StringFilter | undefined;
}
