import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { IssueUpdateManyWithoutTaskNestedInput } from "../inputs/IssueUpdateManyWithoutTaskNestedInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { SubtaskUpdateManyWithoutParentTaskNestedInput } from "../inputs/SubtaskUpdateManyWithoutParentTaskNestedInput";
import { TaskDependencyUpdateManyWithoutTaskNestedInput } from "../inputs/TaskDependencyUpdateManyWithoutTaskNestedInput";
export declare class TaskUpdateWithoutDependentsInput {
    id?: IntFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    details?: NullableStringFieldUpdateOperationsInput | undefined;
    testStrategy?: NullableStringFieldUpdateOperationsInput | undefined;
    priority?: StringFieldUpdateOperationsInput | undefined;
    status?: StringFieldUpdateOperationsInput | undefined;
    complexity?: NullableIntFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    subtasks?: SubtaskUpdateManyWithoutParentTaskNestedInput | undefined;
    dependencies?: TaskDependencyUpdateManyWithoutTaskNestedInput | undefined;
    issues?: IssueUpdateManyWithoutTaskNestedInput | undefined;
}
