import { IssueCreateOrConnectWithoutLabelsInput } from "../inputs/IssueCreateOrConnectWithoutLabelsInput";
import { IssueCreateWithoutLabelsInput } from "../inputs/IssueCreateWithoutLabelsInput";
import { IssueUpdateToOneWithWhereWithoutLabelsInput } from "../inputs/IssueUpdateToOneWithWhereWithoutLabelsInput";
import { IssueUpsertWithoutLabelsInput } from "../inputs/IssueUpsertWithoutLabelsInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";
export declare class IssueUpdateOneRequiredWithoutLabelsNestedInput {
    create?: IssueCreateWithoutLabelsInput | undefined;
    connectOrCreate?: IssueCreateOrConnectWithoutLabelsInput | undefined;
    upsert?: IssueUpsertWithoutLabelsInput | undefined;
    connect?: IssueWhereUniqueInput | undefined;
    update?: IssueUpdateToOneWithWhereWithoutLabelsInput | undefined;
}
