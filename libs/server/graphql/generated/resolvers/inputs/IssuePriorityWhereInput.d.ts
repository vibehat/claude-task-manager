import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IssueListRelationFilter } from "../inputs/IssueListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class IssuePriorityWhereInput {
    AND?: IssuePriorityWhereInput[] | undefined;
    OR?: IssuePriorityWhereInput[] | undefined;
    NOT?: IssuePriorityWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    iconName?: StringFilter | undefined;
    order?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    issues?: IssueListRelationFilter | undefined;
}
