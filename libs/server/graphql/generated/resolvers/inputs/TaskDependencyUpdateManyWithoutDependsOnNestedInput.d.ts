import { TaskDependencyCreateManyDependsOnInputEnvelope } from "../inputs/TaskDependencyCreateManyDependsOnInputEnvelope";
import { TaskDependencyCreateOrConnectWithoutDependsOnInput } from "../inputs/TaskDependencyCreateOrConnectWithoutDependsOnInput";
import { TaskDependencyCreateWithoutDependsOnInput } from "../inputs/TaskDependencyCreateWithoutDependsOnInput";
import { TaskDependencyScalarWhereInput } from "../inputs/TaskDependencyScalarWhereInput";
import { TaskDependencyUpdateManyWithWhereWithoutDependsOnInput } from "../inputs/TaskDependencyUpdateManyWithWhereWithoutDependsOnInput";
import { TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput } from "../inputs/TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput";
import { TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput } from "../inputs/TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput";
import { TaskDependencyWhereUniqueInput } from "../inputs/TaskDependencyWhereUniqueInput";
export declare class TaskDependencyUpdateManyWithoutDependsOnNestedInput {
    create?: TaskDependencyCreateWithoutDependsOnInput[] | undefined;
    connectOrCreate?: TaskDependencyCreateOrConnectWithoutDependsOnInput[] | undefined;
    upsert?: TaskDependencyUpsertWithWhereUniqueWithoutDependsOnInput[] | undefined;
    createMany?: TaskDependencyCreateManyDependsOnInputEnvelope | undefined;
    set?: TaskDependencyWhereUniqueInput[] | undefined;
    disconnect?: TaskDependencyWhereUniqueInput[] | undefined;
    delete?: TaskDependencyWhereUniqueInput[] | undefined;
    connect?: TaskDependencyWhereUniqueInput[] | undefined;
    update?: TaskDependencyUpdateWithWhereUniqueWithoutDependsOnInput[] | undefined;
    updateMany?: TaskDependencyUpdateManyWithWhereWithoutDependsOnInput[] | undefined;
    deleteMany?: TaskDependencyScalarWhereInput[] | undefined;
}
