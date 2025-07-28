import { IssueRelationFilter } from "../inputs/IssueRelationFilter";
import { LabelRelationFilter } from "../inputs/LabelRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class IssueLabelWhereInput {
    AND?: IssueLabelWhereInput[] | undefined;
    OR?: IssueLabelWhereInput[] | undefined;
    NOT?: IssueLabelWhereInput[] | undefined;
    id?: StringFilter | undefined;
    issueId?: StringFilter | undefined;
    labelId?: StringFilter | undefined;
    issue?: IssueRelationFilter | undefined;
    label?: LabelRelationFilter | undefined;
}
