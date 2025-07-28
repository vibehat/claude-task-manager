import { IssueCreateOrConnectWithoutLabelsInput } from "../inputs/IssueCreateOrConnectWithoutLabelsInput";
import { IssueCreateWithoutLabelsInput } from "../inputs/IssueCreateWithoutLabelsInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";
export declare class IssueCreateNestedOneWithoutLabelsInput {
    create?: IssueCreateWithoutLabelsInput | undefined;
    connectOrCreate?: IssueCreateOrConnectWithoutLabelsInput | undefined;
    connect?: IssueWhereUniqueInput | undefined;
}
