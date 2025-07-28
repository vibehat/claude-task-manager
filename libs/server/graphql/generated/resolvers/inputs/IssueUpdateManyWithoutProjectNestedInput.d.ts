import { IssueCreateManyProjectInputEnvelope } from "../inputs/IssueCreateManyProjectInputEnvelope";
import { IssueCreateOrConnectWithoutProjectInput } from "../inputs/IssueCreateOrConnectWithoutProjectInput";
import { IssueCreateWithoutProjectInput } from "../inputs/IssueCreateWithoutProjectInput";
import { IssueScalarWhereInput } from "../inputs/IssueScalarWhereInput";
import { IssueUpdateManyWithWhereWithoutProjectInput } from "../inputs/IssueUpdateManyWithWhereWithoutProjectInput";
import { IssueUpdateWithWhereUniqueWithoutProjectInput } from "../inputs/IssueUpdateWithWhereUniqueWithoutProjectInput";
import { IssueUpsertWithWhereUniqueWithoutProjectInput } from "../inputs/IssueUpsertWithWhereUniqueWithoutProjectInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";
export declare class IssueUpdateManyWithoutProjectNestedInput {
    create?: IssueCreateWithoutProjectInput[] | undefined;
    connectOrCreate?: IssueCreateOrConnectWithoutProjectInput[] | undefined;
    upsert?: IssueUpsertWithWhereUniqueWithoutProjectInput[] | undefined;
    createMany?: IssueCreateManyProjectInputEnvelope | undefined;
    set?: IssueWhereUniqueInput[] | undefined;
    disconnect?: IssueWhereUniqueInput[] | undefined;
    delete?: IssueWhereUniqueInput[] | undefined;
    connect?: IssueWhereUniqueInput[] | undefined;
    update?: IssueUpdateWithWhereUniqueWithoutProjectInput[] | undefined;
    updateMany?: IssueUpdateManyWithWhereWithoutProjectInput[] | undefined;
    deleteMany?: IssueScalarWhereInput[] | undefined;
}
