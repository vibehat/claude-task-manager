import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IssueUpdateManyWithoutSubtaskNestedInput } from "../inputs/IssueUpdateManyWithoutSubtaskNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class SubtaskUpdateWithoutParentTaskInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    details?: NullableStringFieldUpdateOperationsInput | undefined;
    testStrategy?: NullableStringFieldUpdateOperationsInput | undefined;
    status?: StringFieldUpdateOperationsInput | undefined;
    dependencies?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    issues?: IssueUpdateManyWithoutSubtaskNestedInput | undefined;
}
