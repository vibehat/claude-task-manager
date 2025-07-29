import { LabelCountIssuesArgs } from "./args/LabelCountIssuesArgs";
export declare class LabelCount {
    issues: number;
    getIssues(root: LabelCount, args: LabelCountIssuesArgs): number;
}
