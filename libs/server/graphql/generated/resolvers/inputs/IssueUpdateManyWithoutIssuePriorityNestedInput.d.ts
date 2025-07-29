import { IssueCreateManyIssuePriorityInputEnvelope } from "../inputs/IssueCreateManyIssuePriorityInputEnvelope";
import { IssueCreateOrConnectWithoutIssuePriorityInput } from "../inputs/IssueCreateOrConnectWithoutIssuePriorityInput";
import { IssueCreateWithoutIssuePriorityInput } from "../inputs/IssueCreateWithoutIssuePriorityInput";
import { IssueScalarWhereInput } from "../inputs/IssueScalarWhereInput";
import { IssueUpdateManyWithWhereWithoutIssuePriorityInput } from "../inputs/IssueUpdateManyWithWhereWithoutIssuePriorityInput";
import { IssueUpdateWithWhereUniqueWithoutIssuePriorityInput } from "../inputs/IssueUpdateWithWhereUniqueWithoutIssuePriorityInput";
import { IssueUpsertWithWhereUniqueWithoutIssuePriorityInput } from "../inputs/IssueUpsertWithWhereUniqueWithoutIssuePriorityInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";
export declare class IssueUpdateManyWithoutIssuePriorityNestedInput {
    create?: IssueCreateWithoutIssuePriorityInput[] | undefined;
    connectOrCreate?: IssueCreateOrConnectWithoutIssuePriorityInput[] | undefined;
    upsert?: IssueUpsertWithWhereUniqueWithoutIssuePriorityInput[] | undefined;
    createMany?: IssueCreateManyIssuePriorityInputEnvelope | undefined;
    set?: IssueWhereUniqueInput[] | undefined;
    disconnect?: IssueWhereUniqueInput[] | undefined;
    delete?: IssueWhereUniqueInput[] | undefined;
    connect?: IssueWhereUniqueInput[] | undefined;
    update?: IssueUpdateWithWhereUniqueWithoutIssuePriorityInput[] | undefined;
    updateMany?: IssueUpdateManyWithWhereWithoutIssuePriorityInput[] | undefined;
    deleteMany?: IssueScalarWhereInput[] | undefined;
}
