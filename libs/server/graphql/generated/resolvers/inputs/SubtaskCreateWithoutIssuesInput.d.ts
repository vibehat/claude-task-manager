import { TaskCreateNestedOneWithoutSubtasksInput } from "../inputs/TaskCreateNestedOneWithoutSubtasksInput";
export declare class SubtaskCreateWithoutIssuesInput {
    id: string;
    title: string;
    description: string;
    details?: string | undefined;
    testStrategy?: string | undefined;
    status: string;
    dependencies?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    parentTask: TaskCreateNestedOneWithoutSubtasksInput;
}
