import { SubtaskCreateManyParentTaskInputEnvelope } from "../inputs/SubtaskCreateManyParentTaskInputEnvelope";
import { SubtaskCreateOrConnectWithoutParentTaskInput } from "../inputs/SubtaskCreateOrConnectWithoutParentTaskInput";
import { SubtaskCreateWithoutParentTaskInput } from "../inputs/SubtaskCreateWithoutParentTaskInput";
import { SubtaskScalarWhereInput } from "../inputs/SubtaskScalarWhereInput";
import { SubtaskUpdateManyWithWhereWithoutParentTaskInput } from "../inputs/SubtaskUpdateManyWithWhereWithoutParentTaskInput";
import { SubtaskUpdateWithWhereUniqueWithoutParentTaskInput } from "../inputs/SubtaskUpdateWithWhereUniqueWithoutParentTaskInput";
import { SubtaskUpsertWithWhereUniqueWithoutParentTaskInput } from "../inputs/SubtaskUpsertWithWhereUniqueWithoutParentTaskInput";
import { SubtaskWhereUniqueInput } from "../inputs/SubtaskWhereUniqueInput";
export declare class SubtaskUpdateManyWithoutParentTaskNestedInput {
    create?: SubtaskCreateWithoutParentTaskInput[] | undefined;
    connectOrCreate?: SubtaskCreateOrConnectWithoutParentTaskInput[] | undefined;
    upsert?: SubtaskUpsertWithWhereUniqueWithoutParentTaskInput[] | undefined;
    createMany?: SubtaskCreateManyParentTaskInputEnvelope | undefined;
    set?: SubtaskWhereUniqueInput[] | undefined;
    disconnect?: SubtaskWhereUniqueInput[] | undefined;
    delete?: SubtaskWhereUniqueInput[] | undefined;
    connect?: SubtaskWhereUniqueInput[] | undefined;
    update?: SubtaskUpdateWithWhereUniqueWithoutParentTaskInput[] | undefined;
    updateMany?: SubtaskUpdateManyWithWhereWithoutParentTaskInput[] | undefined;
    deleteMany?: SubtaskScalarWhereInput[] | undefined;
}
