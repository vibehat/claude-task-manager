import { IssueCreateOrConnectWithoutSubIssuesInput } from "../inputs/IssueCreateOrConnectWithoutSubIssuesInput";
import { IssueCreateWithoutSubIssuesInput } from "../inputs/IssueCreateWithoutSubIssuesInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";
export declare class IssueCreateNestedOneWithoutSubIssuesInput {
    create?: IssueCreateWithoutSubIssuesInput | undefined;
    connectOrCreate?: IssueCreateOrConnectWithoutSubIssuesInput | undefined;
    connect?: IssueWhereUniqueInput | undefined;
}
