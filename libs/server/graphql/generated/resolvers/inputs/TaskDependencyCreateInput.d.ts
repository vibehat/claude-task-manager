import { TaskCreateNestedOneWithoutDependenciesInput } from "../inputs/TaskCreateNestedOneWithoutDependenciesInput";
import { TaskCreateNestedOneWithoutDependentsInput } from "../inputs/TaskCreateNestedOneWithoutDependentsInput";
export declare class TaskDependencyCreateInput {
    createdAt?: Date | undefined;
    task: TaskCreateNestedOneWithoutDependenciesInput;
    dependsOn: TaskCreateNestedOneWithoutDependentsInput;
}
