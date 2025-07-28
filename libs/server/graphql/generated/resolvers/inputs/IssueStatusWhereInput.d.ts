import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IssueListRelationFilter } from "../inputs/IssueListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class IssueStatusWhereInput {
    AND?: IssueStatusWhereInput[] | undefined;
    OR?: IssueStatusWhereInput[] | undefined;
    NOT?: IssueStatusWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    color?: StringFilter | undefined;
    iconName?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    issues?: IssueListRelationFilter | undefined;
}
