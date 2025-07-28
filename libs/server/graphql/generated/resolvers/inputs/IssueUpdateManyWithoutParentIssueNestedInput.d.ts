import { IssueCreateManyParentIssueInputEnvelope } from "../inputs/IssueCreateManyParentIssueInputEnvelope";
import { IssueCreateOrConnectWithoutParentIssueInput } from "../inputs/IssueCreateOrConnectWithoutParentIssueInput";
import { IssueCreateWithoutParentIssueInput } from "../inputs/IssueCreateWithoutParentIssueInput";
import { IssueScalarWhereInput } from "../inputs/IssueScalarWhereInput";
import { IssueUpdateManyWithWhereWithoutParentIssueInput } from "../inputs/IssueUpdateManyWithWhereWithoutParentIssueInput";
import { IssueUpdateWithWhereUniqueWithoutParentIssueInput } from "../inputs/IssueUpdateWithWhereUniqueWithoutParentIssueInput";
import { IssueUpsertWithWhereUniqueWithoutParentIssueInput } from "../inputs/IssueUpsertWithWhereUniqueWithoutParentIssueInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";
export declare class IssueUpdateManyWithoutParentIssueNestedInput {
    create?: IssueCreateWithoutParentIssueInput[] | undefined;
    connectOrCreate?: IssueCreateOrConnectWithoutParentIssueInput[] | undefined;
    upsert?: IssueUpsertWithWhereUniqueWithoutParentIssueInput[] | undefined;
    createMany?: IssueCreateManyParentIssueInputEnvelope | undefined;
    set?: IssueWhereUniqueInput[] | undefined;
    disconnect?: IssueWhereUniqueInput[] | undefined;
    delete?: IssueWhereUniqueInput[] | undefined;
    connect?: IssueWhereUniqueInput[] | undefined;
    update?: IssueUpdateWithWhereUniqueWithoutParentIssueInput[] | undefined;
    updateMany?: IssueUpdateManyWithWhereWithoutParentIssueInput[] | undefined;
    deleteMany?: IssueScalarWhereInput[] | undefined;
}
