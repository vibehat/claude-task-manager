import { TaskCreateOrConnectWithoutSubtasksInput } from "../inputs/TaskCreateOrConnectWithoutSubtasksInput";
import { TaskCreateWithoutSubtasksInput } from "../inputs/TaskCreateWithoutSubtasksInput";
import { TaskUpdateToOneWithWhereWithoutSubtasksInput } from "../inputs/TaskUpdateToOneWithWhereWithoutSubtasksInput";
import { TaskUpsertWithoutSubtasksInput } from "../inputs/TaskUpsertWithoutSubtasksInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";
export declare class TaskUpdateOneRequiredWithoutSubtasksNestedInput {
    create?: TaskCreateWithoutSubtasksInput | undefined;
    connectOrCreate?: TaskCreateOrConnectWithoutSubtasksInput | undefined;
    upsert?: TaskUpsertWithoutSubtasksInput | undefined;
    connect?: TaskWhereUniqueInput | undefined;
    update?: TaskUpdateToOneWithWhereWithoutSubtasksInput | undefined;
}
