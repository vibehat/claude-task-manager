import { TaskCreateWithoutDependenciesInput } from "../inputs/TaskCreateWithoutDependenciesInput";
import { TaskUpdateWithoutDependenciesInput } from "../inputs/TaskUpdateWithoutDependenciesInput";
import { TaskWhereInput } from "../inputs/TaskWhereInput";
export declare class TaskUpsertWithoutDependenciesInput {
    update: TaskUpdateWithoutDependenciesInput;
    create: TaskCreateWithoutDependenciesInput;
    where?: TaskWhereInput | undefined;
}
