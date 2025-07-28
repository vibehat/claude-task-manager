import { IssueCreateNestedOneWithoutLabelsInput } from "../inputs/IssueCreateNestedOneWithoutLabelsInput";
import { LabelCreateNestedOneWithoutIssuesInput } from "../inputs/LabelCreateNestedOneWithoutIssuesInput";
export declare class IssueLabelCreateInput {
    id?: string | undefined;
    issue: IssueCreateNestedOneWithoutLabelsInput;
    label: LabelCreateNestedOneWithoutIssuesInput;
}
