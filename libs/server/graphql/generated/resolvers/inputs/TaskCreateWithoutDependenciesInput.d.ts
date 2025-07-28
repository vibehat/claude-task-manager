import { IssueCreateNestedManyWithoutTaskInput } from "../inputs/IssueCreateNestedManyWithoutTaskInput";
import { SubtaskCreateNestedManyWithoutParentTaskInput } from "../inputs/SubtaskCreateNestedManyWithoutParentTaskInput";
import { TaskDependencyCreateNestedManyWithoutDependsOnInput } from "../inputs/TaskDependencyCreateNestedManyWithoutDependsOnInput";
export declare class TaskCreateWithoutDependenciesInput {
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
    dependents?: TaskDependencyCreateNestedManyWithoutDependsOnInput | undefined;
    issues?: IssueCreateNestedManyWithoutTaskInput | undefined;
}
