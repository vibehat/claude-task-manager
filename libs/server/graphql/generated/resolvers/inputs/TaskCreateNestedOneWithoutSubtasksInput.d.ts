import { TaskCreateOrConnectWithoutSubtasksInput } from "../inputs/TaskCreateOrConnectWithoutSubtasksInput";
import { TaskCreateWithoutSubtasksInput } from "../inputs/TaskCreateWithoutSubtasksInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";
export declare class TaskCreateNestedOneWithoutSubtasksInput {
    create?: TaskCreateWithoutSubtasksInput | undefined;
    connectOrCreate?: TaskCreateOrConnectWithoutSubtasksInput | undefined;
    connect?: TaskWhereUniqueInput | undefined;
}
