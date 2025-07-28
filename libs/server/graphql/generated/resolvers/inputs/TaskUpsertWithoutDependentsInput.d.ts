import { TaskCreateWithoutDependentsInput } from "../inputs/TaskCreateWithoutDependentsInput";
import { TaskUpdateWithoutDependentsInput } from "../inputs/TaskUpdateWithoutDependentsInput";
import { TaskWhereInput } from "../inputs/TaskWhereInput";
export declare class TaskUpsertWithoutDependentsInput {
    update: TaskUpdateWithoutDependentsInput;
    create: TaskCreateWithoutDependentsInput;
    where?: TaskWhereInput | undefined;
}
