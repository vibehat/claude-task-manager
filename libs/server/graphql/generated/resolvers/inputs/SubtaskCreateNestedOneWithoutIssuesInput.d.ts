import { SubtaskCreateOrConnectWithoutIssuesInput } from "../inputs/SubtaskCreateOrConnectWithoutIssuesInput";
import { SubtaskCreateWithoutIssuesInput } from "../inputs/SubtaskCreateWithoutIssuesInput";
import { SubtaskWhereUniqueInput } from "../inputs/SubtaskWhereUniqueInput";
export declare class SubtaskCreateNestedOneWithoutIssuesInput {
    create?: SubtaskCreateWithoutIssuesInput | undefined;
    connectOrCreate?: SubtaskCreateOrConnectWithoutIssuesInput | undefined;
    connect?: SubtaskWhereUniqueInput | undefined;
}
