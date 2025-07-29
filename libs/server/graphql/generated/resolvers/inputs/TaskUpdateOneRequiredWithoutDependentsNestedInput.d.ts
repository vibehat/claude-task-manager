import { TaskCreateOrConnectWithoutDependentsInput } from "../inputs/TaskCreateOrConnectWithoutDependentsInput";
import { TaskCreateWithoutDependentsInput } from "../inputs/TaskCreateWithoutDependentsInput";
import { TaskUpdateToOneWithWhereWithoutDependentsInput } from "../inputs/TaskUpdateToOneWithWhereWithoutDependentsInput";
import { TaskUpsertWithoutDependentsInput } from "../inputs/TaskUpsertWithoutDependentsInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";
export declare class TaskUpdateOneRequiredWithoutDependentsNestedInput {
    create?: TaskCreateWithoutDependentsInput | undefined;
    connectOrCreate?: TaskCreateOrConnectWithoutDependentsInput | undefined;
    upsert?: TaskUpsertWithoutDependentsInput | undefined;
    connect?: TaskWhereUniqueInput | undefined;
    update?: TaskUpdateToOneWithWhereWithoutDependentsInput | undefined;
}
