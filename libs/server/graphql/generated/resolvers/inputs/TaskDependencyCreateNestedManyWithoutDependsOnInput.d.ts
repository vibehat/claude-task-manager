import { TaskDependencyCreateManyDependsOnInputEnvelope } from "../inputs/TaskDependencyCreateManyDependsOnInputEnvelope";
import { TaskDependencyCreateOrConnectWithoutDependsOnInput } from "../inputs/TaskDependencyCreateOrConnectWithoutDependsOnInput";
import { TaskDependencyCreateWithoutDependsOnInput } from "../inputs/TaskDependencyCreateWithoutDependsOnInput";
import { TaskDependencyWhereUniqueInput } from "../inputs/TaskDependencyWhereUniqueInput";
export declare class TaskDependencyCreateNestedManyWithoutDependsOnInput {
    create?: TaskDependencyCreateWithoutDependsOnInput[] | undefined;
    connectOrCreate?: TaskDependencyCreateOrConnectWithoutDependsOnInput[] | undefined;
    createMany?: TaskDependencyCreateManyDependsOnInputEnvelope | undefined;
    connect?: TaskDependencyWhereUniqueInput[] | undefined;
}
