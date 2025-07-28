import { IssueCreateOrConnectWithoutSubIssuesInput } from "../inputs/IssueCreateOrConnectWithoutSubIssuesInput";
import { IssueCreateWithoutSubIssuesInput } from "../inputs/IssueCreateWithoutSubIssuesInput";
import { IssueUpdateToOneWithWhereWithoutSubIssuesInput } from "../inputs/IssueUpdateToOneWithWhereWithoutSubIssuesInput";
import { IssueUpsertWithoutSubIssuesInput } from "../inputs/IssueUpsertWithoutSubIssuesInput";
import { IssueWhereInput } from "../inputs/IssueWhereInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";
export declare class IssueUpdateOneWithoutSubIssuesNestedInput {
    create?: IssueCreateWithoutSubIssuesInput | undefined;
    connectOrCreate?: IssueCreateOrConnectWithoutSubIssuesInput | undefined;
    upsert?: IssueUpsertWithoutSubIssuesInput | undefined;
    disconnect?: IssueWhereInput | undefined;
    delete?: IssueWhereInput | undefined;
    connect?: IssueWhereUniqueInput | undefined;
    update?: IssueUpdateToOneWithWhereWithoutSubIssuesInput | undefined;
}
