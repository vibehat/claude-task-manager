import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IssueListRelationFilter } from "../inputs/IssueListRelationFilter";
import { IssueStatusWhereInput } from "../inputs/IssueStatusWhereInput";
import { StringFilter } from "../inputs/StringFilter";
export declare class IssueStatusWhereUniqueInput {
    id?: string | undefined;
    AND?: IssueStatusWhereInput[] | undefined;
    OR?: IssueStatusWhereInput[] | undefined;
    NOT?: IssueStatusWhereInput[] | undefined;
    name?: StringFilter | undefined;
    color?: StringFilter | undefined;
    iconName?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    issues?: IssueListRelationFilter | undefined;
}
