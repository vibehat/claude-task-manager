import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { TaskUpdateOneRequiredWithoutDependentsNestedInput } from "../inputs/TaskUpdateOneRequiredWithoutDependentsNestedInput";
export declare class TaskDependencyUpdateWithoutTaskInput {
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    dependsOn?: TaskUpdateOneRequiredWithoutDependentsNestedInput | undefined;
}
