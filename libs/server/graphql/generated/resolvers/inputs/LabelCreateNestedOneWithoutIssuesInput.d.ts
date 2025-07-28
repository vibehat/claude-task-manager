import { LabelCreateOrConnectWithoutIssuesInput } from "../inputs/LabelCreateOrConnectWithoutIssuesInput";
import { LabelCreateWithoutIssuesInput } from "../inputs/LabelCreateWithoutIssuesInput";
import { LabelWhereUniqueInput } from "../inputs/LabelWhereUniqueInput";
export declare class LabelCreateNestedOneWithoutIssuesInput {
    create?: LabelCreateWithoutIssuesInput | undefined;
    connectOrCreate?: LabelCreateOrConnectWithoutIssuesInput | undefined;
    connect?: LabelWhereUniqueInput | undefined;
}
