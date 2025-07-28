import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class TaskMasterMetadataScalarWhereWithAggregatesInput {
    AND?: TaskMasterMetadataScalarWhereWithAggregatesInput[] | undefined;
    OR?: TaskMasterMetadataScalarWhereWithAggregatesInput[] | undefined;
    NOT?: TaskMasterMetadataScalarWhereWithAggregatesInput[] | undefined;
    id?: IntWithAggregatesFilter | undefined;
    created?: DateTimeWithAggregatesFilter | undefined;
    updated?: DateTimeWithAggregatesFilter | undefined;
    description?: StringWithAggregatesFilter | undefined;
}
