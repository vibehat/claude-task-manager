import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class TeamScalarWhereWithAggregatesInput {
    AND?: TeamScalarWhereWithAggregatesInput[] | undefined;
    OR?: TeamScalarWhereWithAggregatesInput[] | undefined;
    NOT?: TeamScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    icon?: StringWithAggregatesFilter | undefined;
    joined?: BoolWithAggregatesFilter | undefined;
    color?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
