import { LabelCreateWithoutIssuesInput } from "../inputs/LabelCreateWithoutIssuesInput";
import { LabelUpdateWithoutIssuesInput } from "../inputs/LabelUpdateWithoutIssuesInput";
import { LabelWhereInput } from "../inputs/LabelWhereInput";
export declare class LabelUpsertWithoutIssuesInput {
    update: LabelUpdateWithoutIssuesInput;
    create: LabelCreateWithoutIssuesInput;
    where?: LabelWhereInput | undefined;
}
