import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { TaskUpdateOneRequiredWithoutDependenciesNestedInput } from "../inputs/TaskUpdateOneRequiredWithoutDependenciesNestedInput";
import { TaskUpdateOneRequiredWithoutDependentsNestedInput } from "../inputs/TaskUpdateOneRequiredWithoutDependentsNestedInput";
export declare class TaskDependencyUpdateInput {
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    task?: TaskUpdateOneRequiredWithoutDependenciesNestedInput | undefined;
    dependsOn?: TaskUpdateOneRequiredWithoutDependentsNestedInput | undefined;
}
