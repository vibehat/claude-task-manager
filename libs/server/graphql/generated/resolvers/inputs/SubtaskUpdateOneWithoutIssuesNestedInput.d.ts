import { SubtaskCreateOrConnectWithoutIssuesInput } from "../inputs/SubtaskCreateOrConnectWithoutIssuesInput";
import { SubtaskCreateWithoutIssuesInput } from "../inputs/SubtaskCreateWithoutIssuesInput";
import { SubtaskUpdateToOneWithWhereWithoutIssuesInput } from "../inputs/SubtaskUpdateToOneWithWhereWithoutIssuesInput";
import { SubtaskUpsertWithoutIssuesInput } from "../inputs/SubtaskUpsertWithoutIssuesInput";
import { SubtaskWhereInput } from "../inputs/SubtaskWhereInput";
import { SubtaskWhereUniqueInput } from "../inputs/SubtaskWhereUniqueInput";
export declare class SubtaskUpdateOneWithoutIssuesNestedInput {
    create?: SubtaskCreateWithoutIssuesInput | undefined;
    connectOrCreate?: SubtaskCreateOrConnectWithoutIssuesInput | undefined;
    upsert?: SubtaskUpsertWithoutIssuesInput | undefined;
    disconnect?: SubtaskWhereInput | undefined;
    delete?: SubtaskWhereInput | undefined;
    connect?: SubtaskWhereUniqueInput | undefined;
    update?: SubtaskUpdateToOneWithWhereWithoutIssuesInput | undefined;
}
