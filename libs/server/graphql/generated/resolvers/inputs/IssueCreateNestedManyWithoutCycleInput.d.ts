import { IssueCreateManyCycleInputEnvelope } from "../inputs/IssueCreateManyCycleInputEnvelope";
import { IssueCreateOrConnectWithoutCycleInput } from "../inputs/IssueCreateOrConnectWithoutCycleInput";
import { IssueCreateWithoutCycleInput } from "../inputs/IssueCreateWithoutCycleInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";
export declare class IssueCreateNestedManyWithoutCycleInput {
    create?: IssueCreateWithoutCycleInput[] | undefined;
    connectOrCreate?: IssueCreateOrConnectWithoutCycleInput[] | undefined;
    createMany?: IssueCreateManyCycleInputEnvelope | undefined;
    connect?: IssueWhereUniqueInput[] | undefined;
}
