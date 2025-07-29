import { Issue } from "../models/Issue";
import { Label } from "../models/Label";
export declare class IssueLabel {
    id: string;
    issueId: string;
    labelId: string;
    issue?: Issue;
    label?: Label;
}
