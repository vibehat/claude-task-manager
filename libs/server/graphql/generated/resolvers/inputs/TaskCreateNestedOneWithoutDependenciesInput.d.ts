import { TaskCreateOrConnectWithoutDependenciesInput } from "../inputs/TaskCreateOrConnectWithoutDependenciesInput";
import { TaskCreateWithoutDependenciesInput } from "../inputs/TaskCreateWithoutDependenciesInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";
export declare class TaskCreateNestedOneWithoutDependenciesInput {
    create?: TaskCreateWithoutDependenciesInput | undefined;
    connectOrCreate?: TaskCreateOrConnectWithoutDependenciesInput | undefined;
    connect?: TaskWhereUniqueInput | undefined;
}
