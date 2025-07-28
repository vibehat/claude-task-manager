import { IssueCreateManySubtaskInputEnvelope } from "../inputs/IssueCreateManySubtaskInputEnvelope";
import { IssueCreateOrConnectWithoutSubtaskInput } from "../inputs/IssueCreateOrConnectWithoutSubtaskInput";
import { IssueCreateWithoutSubtaskInput } from "../inputs/IssueCreateWithoutSubtaskInput";
import { IssueScalarWhereInput } from "../inputs/IssueScalarWhereInput";
import { IssueUpdateManyWithWhereWithoutSubtaskInput } from "../inputs/IssueUpdateManyWithWhereWithoutSubtaskInput";
import { IssueUpdateWithWhereUniqueWithoutSubtaskInput } from "../inputs/IssueUpdateWithWhereUniqueWithoutSubtaskInput";
import { IssueUpsertWithWhereUniqueWithoutSubtaskInput } from "../inputs/IssueUpsertWithWhereUniqueWithoutSubtaskInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";
export declare class IssueUpdateManyWithoutSubtaskNestedInput {
    create?: IssueCreateWithoutSubtaskInput[] | undefined;
    connectOrCreate?: IssueCreateOrConnectWithoutSubtaskInput[] | undefined;
    upsert?: IssueUpsertWithWhereUniqueWithoutSubtaskInput[] | undefined;
    createMany?: IssueCreateManySubtaskInputEnvelope | undefined;
    set?: IssueWhereUniqueInput[] | undefined;
    disconnect?: IssueWhereUniqueInput[] | undefined;
    delete?: IssueWhereUniqueInput[] | undefined;
    connect?: IssueWhereUniqueInput[] | undefined;
    update?: IssueUpdateWithWhereUniqueWithoutSubtaskInput[] | undefined;
    updateMany?: IssueUpdateManyWithWhereWithoutSubtaskInput[] | undefined;
    deleteMany?: IssueScalarWhereInput[] | undefined;
}
