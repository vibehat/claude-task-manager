import { SubtaskCreateManyParentTaskInputEnvelope } from "../inputs/SubtaskCreateManyParentTaskInputEnvelope";
import { SubtaskCreateOrConnectWithoutParentTaskInput } from "../inputs/SubtaskCreateOrConnectWithoutParentTaskInput";
import { SubtaskCreateWithoutParentTaskInput } from "../inputs/SubtaskCreateWithoutParentTaskInput";
import { SubtaskWhereUniqueInput } from "../inputs/SubtaskWhereUniqueInput";
export declare class SubtaskCreateNestedManyWithoutParentTaskInput {
    create?: SubtaskCreateWithoutParentTaskInput[] | undefined;
    connectOrCreate?: SubtaskCreateOrConnectWithoutParentTaskInput[] | undefined;
    createMany?: SubtaskCreateManyParentTaskInputEnvelope | undefined;
    connect?: SubtaskWhereUniqueInput[] | undefined;
}
