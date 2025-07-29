import { IssueCreateManyIssueStatusInputEnvelope } from "../inputs/IssueCreateManyIssueStatusInputEnvelope";
import { IssueCreateOrConnectWithoutIssueStatusInput } from "../inputs/IssueCreateOrConnectWithoutIssueStatusInput";
import { IssueCreateWithoutIssueStatusInput } from "../inputs/IssueCreateWithoutIssueStatusInput";
import { IssueScalarWhereInput } from "../inputs/IssueScalarWhereInput";
import { IssueUpdateManyWithWhereWithoutIssueStatusInput } from "../inputs/IssueUpdateManyWithWhereWithoutIssueStatusInput";
import { IssueUpdateWithWhereUniqueWithoutIssueStatusInput } from "../inputs/IssueUpdateWithWhereUniqueWithoutIssueStatusInput";
import { IssueUpsertWithWhereUniqueWithoutIssueStatusInput } from "../inputs/IssueUpsertWithWhereUniqueWithoutIssueStatusInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";
export declare class IssueUpdateManyWithoutIssueStatusNestedInput {
    create?: IssueCreateWithoutIssueStatusInput[] | undefined;
    connectOrCreate?: IssueCreateOrConnectWithoutIssueStatusInput[] | undefined;
    upsert?: IssueUpsertWithWhereUniqueWithoutIssueStatusInput[] | undefined;
    createMany?: IssueCreateManyIssueStatusInputEnvelope | undefined;
    set?: IssueWhereUniqueInput[] | undefined;
    disconnect?: IssueWhereUniqueInput[] | undefined;
    delete?: IssueWhereUniqueInput[] | undefined;
    connect?: IssueWhereUniqueInput[] | undefined;
    update?: IssueUpdateWithWhereUniqueWithoutIssueStatusInput[] | undefined;
    updateMany?: IssueUpdateManyWithWhereWithoutIssueStatusInput[] | undefined;
    deleteMany?: IssueScalarWhereInput[] | undefined;
}
