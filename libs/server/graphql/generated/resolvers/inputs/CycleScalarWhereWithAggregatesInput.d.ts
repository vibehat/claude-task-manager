import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class CycleScalarWhereWithAggregatesInput {
    AND?: CycleScalarWhereWithAggregatesInput[] | undefined;
    OR?: CycleScalarWhereWithAggregatesInput[] | undefined;
    NOT?: CycleScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    number?: IntWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    teamId?: StringWithAggregatesFilter | undefined;
    startDate?: DateTimeWithAggregatesFilter | undefined;
    endDate?: DateTimeWithAggregatesFilter | undefined;
    progress?: IntWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
