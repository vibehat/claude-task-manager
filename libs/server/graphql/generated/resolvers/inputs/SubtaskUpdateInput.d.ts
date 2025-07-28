import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IssueUpdateManyWithoutSubtaskNestedInput } from "../inputs/IssueUpdateManyWithoutSubtaskNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateOneRequiredWithoutSubtasksNestedInput } from "../inputs/TaskUpdateOneRequiredWithoutSubtasksNestedInput";
export declare class SubtaskUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    details?: NullableStringFieldUpdateOperationsInput | undefined;
    testStrategy?: NullableStringFieldUpdateOperationsInput | undefined;
    status?: StringFieldUpdateOperationsInput | undefined;
    dependencies?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    parentTask?: TaskUpdateOneRequiredWithoutSubtasksNestedInput | undefined;
    issues?: IssueUpdateManyWithoutSubtaskNestedInput | undefined;
}
