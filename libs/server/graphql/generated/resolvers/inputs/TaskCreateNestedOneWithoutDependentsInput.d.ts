import { TaskCreateOrConnectWithoutDependentsInput } from "../inputs/TaskCreateOrConnectWithoutDependentsInput";
import { TaskCreateWithoutDependentsInput } from "../inputs/TaskCreateWithoutDependentsInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";
export declare class TaskCreateNestedOneWithoutDependentsInput {
    create?: TaskCreateWithoutDependentsInput | undefined;
    connectOrCreate?: TaskCreateOrConnectWithoutDependentsInput | undefined;
    connect?: TaskWhereUniqueInput | undefined;
}
