import { IssueStatusCreateOrConnectWithoutIssuesInput } from "../inputs/IssueStatusCreateOrConnectWithoutIssuesInput";
import { IssueStatusCreateWithoutIssuesInput } from "../inputs/IssueStatusCreateWithoutIssuesInput";
import { IssueStatusWhereUniqueInput } from "../inputs/IssueStatusWhereUniqueInput";
export declare class IssueStatusCreateNestedOneWithoutIssuesInput {
    create?: IssueStatusCreateWithoutIssuesInput | undefined;
    connectOrCreate?: IssueStatusCreateOrConnectWithoutIssuesInput | undefined;
    connect?: IssueStatusWhereUniqueInput | undefined;
}
