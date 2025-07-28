import { IssueStatusCreateOrConnectWithoutIssuesInput } from "../inputs/IssueStatusCreateOrConnectWithoutIssuesInput";
import { IssueStatusCreateWithoutIssuesInput } from "../inputs/IssueStatusCreateWithoutIssuesInput";
import { IssueStatusUpdateToOneWithWhereWithoutIssuesInput } from "../inputs/IssueStatusUpdateToOneWithWhereWithoutIssuesInput";
import { IssueStatusUpsertWithoutIssuesInput } from "../inputs/IssueStatusUpsertWithoutIssuesInput";
import { IssueStatusWhereInput } from "../inputs/IssueStatusWhereInput";
import { IssueStatusWhereUniqueInput } from "../inputs/IssueStatusWhereUniqueInput";
export declare class IssueStatusUpdateOneWithoutIssuesNestedInput {
    create?: IssueStatusCreateWithoutIssuesInput | undefined;
    connectOrCreate?: IssueStatusCreateOrConnectWithoutIssuesInput | undefined;
    upsert?: IssueStatusUpsertWithoutIssuesInput | undefined;
    disconnect?: IssueStatusWhereInput | undefined;
    delete?: IssueStatusWhereInput | undefined;
    connect?: IssueStatusWhereUniqueInput | undefined;
    update?: IssueStatusUpdateToOneWithWhereWithoutIssuesInput | undefined;
}
