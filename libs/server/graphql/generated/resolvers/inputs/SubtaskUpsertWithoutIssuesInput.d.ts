import { SubtaskCreateWithoutIssuesInput } from "../inputs/SubtaskCreateWithoutIssuesInput";
import { SubtaskUpdateWithoutIssuesInput } from "../inputs/SubtaskUpdateWithoutIssuesInput";
import { SubtaskWhereInput } from "../inputs/SubtaskWhereInput";
export declare class SubtaskUpsertWithoutIssuesInput {
    update: SubtaskUpdateWithoutIssuesInput;
    create: SubtaskCreateWithoutIssuesInput;
    where?: SubtaskWhereInput | undefined;
}
