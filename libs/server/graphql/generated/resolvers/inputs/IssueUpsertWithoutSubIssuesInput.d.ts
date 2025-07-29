import { IssueCreateWithoutSubIssuesInput } from "../inputs/IssueCreateWithoutSubIssuesInput";
import { IssueUpdateWithoutSubIssuesInput } from "../inputs/IssueUpdateWithoutSubIssuesInput";
import { IssueWhereInput } from "../inputs/IssueWhereInput";
export declare class IssueUpsertWithoutSubIssuesInput {
    update: IssueUpdateWithoutSubIssuesInput;
    create: IssueCreateWithoutSubIssuesInput;
    where?: IssueWhereInput | undefined;
}
