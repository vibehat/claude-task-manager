import { IssueLabelIssueIdLabelIdCompoundUniqueInput } from "../inputs/IssueLabelIssueIdLabelIdCompoundUniqueInput";
import { IssueLabelWhereInput } from "../inputs/IssueLabelWhereInput";
import { IssueRelationFilter } from "../inputs/IssueRelationFilter";
import { LabelRelationFilter } from "../inputs/LabelRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class IssueLabelWhereUniqueInput {
    id?: string | undefined;
    issueId_labelId?: IssueLabelIssueIdLabelIdCompoundUniqueInput | undefined;
    AND?: IssueLabelWhereInput[] | undefined;
    OR?: IssueLabelWhereInput[] | undefined;
    NOT?: IssueLabelWhereInput[] | undefined;
    issueId?: StringFilter | undefined;
    labelId?: StringFilter | undefined;
    issue?: IssueRelationFilter | undefined;
    label?: LabelRelationFilter | undefined;
}
