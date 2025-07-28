import { IssueStatusCreateInput } from "../../../inputs/IssueStatusCreateInput";
import { IssueStatusUpdateInput } from "../../../inputs/IssueStatusUpdateInput";
import { IssueStatusWhereUniqueInput } from "../../../inputs/IssueStatusWhereUniqueInput";
export declare class UpsertOneIssueStatusArgs {
    where: IssueStatusWhereUniqueInput;
    create: IssueStatusCreateInput;
    update: IssueStatusUpdateInput;
}
