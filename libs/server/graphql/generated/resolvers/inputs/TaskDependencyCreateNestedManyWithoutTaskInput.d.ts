import { TaskDependencyCreateManyTaskInputEnvelope } from "../inputs/TaskDependencyCreateManyTaskInputEnvelope";
import { TaskDependencyCreateOrConnectWithoutTaskInput } from "../inputs/TaskDependencyCreateOrConnectWithoutTaskInput";
import { TaskDependencyCreateWithoutTaskInput } from "../inputs/TaskDependencyCreateWithoutTaskInput";
import { TaskDependencyWhereUniqueInput } from "../inputs/TaskDependencyWhereUniqueInput";
export declare class TaskDependencyCreateNestedManyWithoutTaskInput {
    create?: TaskDependencyCreateWithoutTaskInput[] | undefined;
    connectOrCreate?: TaskDependencyCreateOrConnectWithoutTaskInput[] | undefined;
    createMany?: TaskDependencyCreateManyTaskInputEnvelope | undefined;
    connect?: TaskDependencyWhereUniqueInput[] | undefined;
}
