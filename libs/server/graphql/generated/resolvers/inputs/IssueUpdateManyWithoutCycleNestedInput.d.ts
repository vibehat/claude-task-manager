import { IssueCreateManyCycleInputEnvelope } from "../inputs/IssueCreateManyCycleInputEnvelope";
import { IssueCreateOrConnectWithoutCycleInput } from "../inputs/IssueCreateOrConnectWithoutCycleInput";
import { IssueCreateWithoutCycleInput } from "../inputs/IssueCreateWithoutCycleInput";
import { IssueScalarWhereInput } from "../inputs/IssueScalarWhereInput";
import { IssueUpdateManyWithWhereWithoutCycleInput } from "../inputs/IssueUpdateManyWithWhereWithoutCycleInput";
import { IssueUpdateWithWhereUniqueWithoutCycleInput } from "../inputs/IssueUpdateWithWhereUniqueWithoutCycleInput";
import { IssueUpsertWithWhereUniqueWithoutCycleInput } from "../inputs/IssueUpsertWithWhereUniqueWithoutCycleInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";
export declare class IssueUpdateManyWithoutCycleNestedInput {
    create?: IssueCreateWithoutCycleInput[] | undefined;
    connectOrCreate?: IssueCreateOrConnectWithoutCycleInput[] | undefined;
    upsert?: IssueUpsertWithWhereUniqueWithoutCycleInput[] | undefined;
    createMany?: IssueCreateManyCycleInputEnvelope | undefined;
    set?: IssueWhereUniqueInput[] | undefined;
    disconnect?: IssueWhereUniqueInput[] | undefined;
    delete?: IssueWhereUniqueInput[] | undefined;
    connect?: IssueWhereUniqueInput[] | undefined;
    update?: IssueUpdateWithWhereUniqueWithoutCycleInput[] | undefined;
    updateMany?: IssueUpdateManyWithWhereWithoutCycleInput[] | undefined;
    deleteMany?: IssueScalarWhereInput[] | undefined;
}
