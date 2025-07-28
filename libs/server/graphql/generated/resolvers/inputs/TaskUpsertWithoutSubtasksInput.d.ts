import { TaskCreateWithoutSubtasksInput } from "../inputs/TaskCreateWithoutSubtasksInput";
import { TaskUpdateWithoutSubtasksInput } from "../inputs/TaskUpdateWithoutSubtasksInput";
import { TaskWhereInput } from "../inputs/TaskWhereInput";
export declare class TaskUpsertWithoutSubtasksInput {
    update: TaskUpdateWithoutSubtasksInput;
    create: TaskCreateWithoutSubtasksInput;
    where?: TaskWhereInput | undefined;
}
