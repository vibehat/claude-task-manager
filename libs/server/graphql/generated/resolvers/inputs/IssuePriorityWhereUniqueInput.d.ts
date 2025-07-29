import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IssueListRelationFilter } from "../inputs/IssueListRelationFilter";
import { IssuePriorityWhereInput } from "../inputs/IssuePriorityWhereInput";
import { StringFilter } from "../inputs/StringFilter";
export declare class IssuePriorityWhereUniqueInput {
    id?: string | undefined;
    AND?: IssuePriorityWhereInput[] | undefined;
    OR?: IssuePriorityWhereInput[] | undefined;
    NOT?: IssuePriorityWhereInput[] | undefined;
    name?: StringFilter | undefined;
    iconName?: StringFilter | undefined;
    order?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    issues?: IssueListRelationFilter | undefined;
}
