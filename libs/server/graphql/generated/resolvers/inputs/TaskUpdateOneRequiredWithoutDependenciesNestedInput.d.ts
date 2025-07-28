import { TaskCreateOrConnectWithoutDependenciesInput } from "../inputs/TaskCreateOrConnectWithoutDependenciesInput";
import { TaskCreateWithoutDependenciesInput } from "../inputs/TaskCreateWithoutDependenciesInput";
import { TaskUpdateToOneWithWhereWithoutDependenciesInput } from "../inputs/TaskUpdateToOneWithWhereWithoutDependenciesInput";
import { TaskUpsertWithoutDependenciesInput } from "../inputs/TaskUpsertWithoutDependenciesInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";
export declare class TaskUpdateOneRequiredWithoutDependenciesNestedInput {
    create?: TaskCreateWithoutDependenciesInput | undefined;
    connectOrCreate?: TaskCreateOrConnectWithoutDependenciesInput | undefined;
    upsert?: TaskUpsertWithoutDependenciesInput | undefined;
    connect?: TaskWhereUniqueInput | undefined;
    update?: TaskUpdateToOneWithWhereWithoutDependenciesInput | undefined;
}
