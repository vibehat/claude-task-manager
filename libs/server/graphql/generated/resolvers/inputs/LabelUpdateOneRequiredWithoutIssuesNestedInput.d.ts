import { LabelCreateOrConnectWithoutIssuesInput } from "../inputs/LabelCreateOrConnectWithoutIssuesInput";
import { LabelCreateWithoutIssuesInput } from "../inputs/LabelCreateWithoutIssuesInput";
import { LabelUpdateToOneWithWhereWithoutIssuesInput } from "../inputs/LabelUpdateToOneWithWhereWithoutIssuesInput";
import { LabelUpsertWithoutIssuesInput } from "../inputs/LabelUpsertWithoutIssuesInput";
import { LabelWhereUniqueInput } from "../inputs/LabelWhereUniqueInput";
export declare class LabelUpdateOneRequiredWithoutIssuesNestedInput {
    create?: LabelCreateWithoutIssuesInput | undefined;
    connectOrCreate?: LabelCreateOrConnectWithoutIssuesInput | undefined;
    upsert?: LabelUpsertWithoutIssuesInput | undefined;
    connect?: LabelWhereUniqueInput | undefined;
    update?: LabelUpdateToOneWithWhereWithoutIssuesInput | undefined;
}
