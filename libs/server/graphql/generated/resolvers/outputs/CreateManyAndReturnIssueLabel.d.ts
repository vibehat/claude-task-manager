import { Issue } from "../../models/Issue";
import { Label } from "../../models/Label";
export declare class CreateManyAndReturnIssueLabel {
    id: string;
    issueId: string;
    labelId: string;
    issue: Issue;
    label: Label;
}
