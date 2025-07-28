import { IssueCreateWithoutLabelsInput } from "../inputs/IssueCreateWithoutLabelsInput";
import { IssueUpdateWithoutLabelsInput } from "../inputs/IssueUpdateWithoutLabelsInput";
import { IssueWhereInput } from "../inputs/IssueWhereInput";
export declare class IssueUpsertWithoutLabelsInput {
    update: IssueUpdateWithoutLabelsInput;
    create: IssueCreateWithoutLabelsInput;
    where?: IssueWhereInput | undefined;
}
