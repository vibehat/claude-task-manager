import { TaskDependencyCreateManyTaskInputEnvelope } from "../inputs/TaskDependencyCreateManyTaskInputEnvelope";
import { TaskDependencyCreateOrConnectWithoutTaskInput } from "../inputs/TaskDependencyCreateOrConnectWithoutTaskInput";
import { TaskDependencyCreateWithoutTaskInput } from "../inputs/TaskDependencyCreateWithoutTaskInput";
import { TaskDependencyScalarWhereInput } from "../inputs/TaskDependencyScalarWhereInput";
import { TaskDependencyUpdateManyWithWhereWithoutTaskInput } from "../inputs/TaskDependencyUpdateManyWithWhereWithoutTaskInput";
import { TaskDependencyUpdateWithWhereUniqueWithoutTaskInput } from "../inputs/TaskDependencyUpdateWithWhereUniqueWithoutTaskInput";
import { TaskDependencyUpsertWithWhereUniqueWithoutTaskInput } from "../inputs/TaskDependencyUpsertWithWhereUniqueWithoutTaskInput";
import { TaskDependencyWhereUniqueInput } from "../inputs/TaskDependencyWhereUniqueInput";
export declare class TaskDependencyUpdateManyWithoutTaskNestedInput {
    create?: TaskDependencyCreateWithoutTaskInput[] | undefined;
    connectOrCreate?: TaskDependencyCreateOrConnectWithoutTaskInput[] | undefined;
    upsert?: TaskDependencyUpsertWithWhereUniqueWithoutTaskInput[] | undefined;
    createMany?: TaskDependencyCreateManyTaskInputEnvelope | undefined;
    set?: TaskDependencyWhereUniqueInput[] | undefined;
    disconnect?: TaskDependencyWhereUniqueInput[] | undefined;
    delete?: TaskDependencyWhereUniqueInput[] | undefined;
    connect?: TaskDependencyWhereUniqueInput[] | undefined;
    update?: TaskDependencyUpdateWithWhereUniqueWithoutTaskInput[] | undefined;
    updateMany?: TaskDependencyUpdateManyWithWhereWithoutTaskInput[] | undefined;
    deleteMany?: TaskDependencyScalarWhereInput[] | undefined;
}
