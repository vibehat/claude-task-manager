import { IssueCreateInput } from "../../../inputs/IssueCreateInput";
import { IssueUpdateInput } from "../../../inputs/IssueUpdateInput";
import { IssueWhereUniqueInput } from "../../../inputs/IssueWhereUniqueInput";
export declare class UpsertOneIssueArgs {
    where: IssueWhereUniqueInput;
    create: IssueCreateInput;
    update: IssueUpdateInput;
}
