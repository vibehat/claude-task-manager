import { IssueUpdateOneRequiredWithoutLabelsNestedInput } from "../inputs/IssueUpdateOneRequiredWithoutLabelsNestedInput";
import { LabelUpdateOneRequiredWithoutIssuesNestedInput } from "../inputs/LabelUpdateOneRequiredWithoutIssuesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class IssueLabelUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    issue?: IssueUpdateOneRequiredWithoutLabelsNestedInput | undefined;
    label?: LabelUpdateOneRequiredWithoutIssuesNestedInput | undefined;
}
