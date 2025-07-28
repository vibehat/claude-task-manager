import { IssueCreateManyAssigneeInputEnvelope } from "../inputs/IssueCreateManyAssigneeInputEnvelope";
import { IssueCreateOrConnectWithoutAssigneeInput } from "../inputs/IssueCreateOrConnectWithoutAssigneeInput";
import { IssueCreateWithoutAssigneeInput } from "../inputs/IssueCreateWithoutAssigneeInput";
import { IssueScalarWhereInput } from "../inputs/IssueScalarWhereInput";
import { IssueUpdateManyWithWhereWithoutAssigneeInput } from "../inputs/IssueUpdateManyWithWhereWithoutAssigneeInput";
import { IssueUpdateWithWhereUniqueWithoutAssigneeInput } from "../inputs/IssueUpdateWithWhereUniqueWithoutAssigneeInput";
import { IssueUpsertWithWhereUniqueWithoutAssigneeInput } from "../inputs/IssueUpsertWithWhereUniqueWithoutAssigneeInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";
export declare class IssueUpdateManyWithoutAssigneeNestedInput {
    create?: IssueCreateWithoutAssigneeInput[] | undefined;
    connectOrCreate?: IssueCreateOrConnectWithoutAssigneeInput[] | undefined;
    upsert?: IssueUpsertWithWhereUniqueWithoutAssigneeInput[] | undefined;
    createMany?: IssueCreateManyAssigneeInputEnvelope | undefined;
    set?: IssueWhereUniqueInput[] | undefined;
    disconnect?: IssueWhereUniqueInput[] | undefined;
    delete?: IssueWhereUniqueInput[] | undefined;
    connect?: IssueWhereUniqueInput[] | undefined;
    update?: IssueUpdateWithWhereUniqueWithoutAssigneeInput[] | undefined;
    updateMany?: IssueUpdateManyWithWhereWithoutAssigneeInput[] | undefined;
    deleteMany?: IssueScalarWhereInput[] | undefined;
}
