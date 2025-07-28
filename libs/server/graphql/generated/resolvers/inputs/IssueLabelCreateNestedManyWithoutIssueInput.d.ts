import { IssueLabelCreateManyIssueInputEnvelope } from "../inputs/IssueLabelCreateManyIssueInputEnvelope";
import { IssueLabelCreateOrConnectWithoutIssueInput } from "../inputs/IssueLabelCreateOrConnectWithoutIssueInput";
import { IssueLabelCreateWithoutIssueInput } from "../inputs/IssueLabelCreateWithoutIssueInput";
import { IssueLabelWhereUniqueInput } from "../inputs/IssueLabelWhereUniqueInput";
export declare class IssueLabelCreateNestedManyWithoutIssueInput {
    create?: IssueLabelCreateWithoutIssueInput[] | undefined;
    connectOrCreate?: IssueLabelCreateOrConnectWithoutIssueInput[] | undefined;
    createMany?: IssueLabelCreateManyIssueInputEnvelope | undefined;
    connect?: IssueLabelWhereUniqueInput[] | undefined;
}
