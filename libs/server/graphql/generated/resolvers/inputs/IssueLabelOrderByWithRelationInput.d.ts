import { IssueOrderByWithRelationInput } from "../inputs/IssueOrderByWithRelationInput";
import { LabelOrderByWithRelationInput } from "../inputs/LabelOrderByWithRelationInput";
export declare class IssueLabelOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    issueId?: "asc" | "desc" | undefined;
    labelId?: "asc" | "desc" | undefined;
    issue?: IssueOrderByWithRelationInput | undefined;
    label?: LabelOrderByWithRelationInput | undefined;
}
