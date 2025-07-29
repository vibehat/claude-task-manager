import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class IssueStatusScalarWhereWithAggregatesInput {
    AND?: IssueStatusScalarWhereWithAggregatesInput[] | undefined;
    OR?: IssueStatusScalarWhereWithAggregatesInput[] | undefined;
    NOT?: IssueStatusScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    color?: StringWithAggregatesFilter | undefined;
    iconName?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
