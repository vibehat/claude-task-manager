import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class IssuePriorityScalarWhereWithAggregatesInput {
    AND?: IssuePriorityScalarWhereWithAggregatesInput[] | undefined;
    OR?: IssuePriorityScalarWhereWithAggregatesInput[] | undefined;
    NOT?: IssuePriorityScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    iconName?: StringWithAggregatesFilter | undefined;
    order?: IntWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
