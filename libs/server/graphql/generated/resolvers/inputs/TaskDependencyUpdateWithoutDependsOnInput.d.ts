import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { TaskUpdateOneRequiredWithoutDependenciesNestedInput } from "../inputs/TaskUpdateOneRequiredWithoutDependenciesNestedInput";
export declare class TaskDependencyUpdateWithoutDependsOnInput {
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    task?: TaskUpdateOneRequiredWithoutDependenciesNestedInput | undefined;
}
