import { TaskCreateNestedOneWithoutDependentsInput } from "../inputs/TaskCreateNestedOneWithoutDependentsInput";
export declare class TaskDependencyCreateWithoutTaskInput {
    createdAt?: Date | undefined;
    dependsOn: TaskCreateNestedOneWithoutDependentsInput;
}
