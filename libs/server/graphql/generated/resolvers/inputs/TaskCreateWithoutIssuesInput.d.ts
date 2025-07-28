import { SubtaskCreateNestedManyWithoutParentTaskInput } from "../inputs/SubtaskCreateNestedManyWithoutParentTaskInput";
import { TaskDependencyCreateNestedManyWithoutDependsOnInput } from "../inputs/TaskDependencyCreateNestedManyWithoutDependsOnInput";
import { TaskDependencyCreateNestedManyWithoutTaskInput } from "../inputs/TaskDependencyCreateNestedManyWithoutTaskInput";
export declare class TaskCreateWithoutIssuesInput {
    id: number;
    title: string;
    description: string;
    details?: string | undefined;
    testStrategy?: string | undefined;
    priority: string;
    status: string;
    complexity?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    subtasks?: SubtaskCreateNestedManyWithoutParentTaskInput | undefined;
    dependencies?: TaskDependencyCreateNestedManyWithoutTaskInput | undefined;
    dependents?: TaskDependencyCreateNestedManyWithoutDependsOnInput | undefined;
}
