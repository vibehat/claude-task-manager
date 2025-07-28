import { IssueCountLabelsArgs } from "./args/IssueCountLabelsArgs";
import { IssueCountSubIssuesArgs } from "./args/IssueCountSubIssuesArgs";
export declare class IssueCount {
    labels: number;
    subIssues: number;
    getLabels(root: IssueCount, args: IssueCountLabelsArgs): number;
    getSubIssues(root: IssueCount, args: IssueCountSubIssuesArgs): number;
}
