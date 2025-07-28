import { IssueLabelCreateManyIssueInputEnvelope } from "../inputs/IssueLabelCreateManyIssueInputEnvelope";
import { IssueLabelCreateOrConnectWithoutIssueInput } from "../inputs/IssueLabelCreateOrConnectWithoutIssueInput";
import { IssueLabelCreateWithoutIssueInput } from "../inputs/IssueLabelCreateWithoutIssueInput";
import { IssueLabelScalarWhereInput } from "../inputs/IssueLabelScalarWhereInput";
import { IssueLabelUpdateManyWithWhereWithoutIssueInput } from "../inputs/IssueLabelUpdateManyWithWhereWithoutIssueInput";
import { IssueLabelUpdateWithWhereUniqueWithoutIssueInput } from "../inputs/IssueLabelUpdateWithWhereUniqueWithoutIssueInput";
import { IssueLabelUpsertWithWhereUniqueWithoutIssueInput } from "../inputs/IssueLabelUpsertWithWhereUniqueWithoutIssueInput";
import { IssueLabelWhereUniqueInput } from "../inputs/IssueLabelWhereUniqueInput";
export declare class IssueLabelUpdateManyWithoutIssueNestedInput {
    create?: IssueLabelCreateWithoutIssueInput[] | undefined;
    connectOrCreate?: IssueLabelCreateOrConnectWithoutIssueInput[] | undefined;
    upsert?: IssueLabelUpsertWithWhereUniqueWithoutIssueInput[] | undefined;
    createMany?: IssueLabelCreateManyIssueInputEnvelope | undefined;
    set?: IssueLabelWhereUniqueInput[] | undefined;
    disconnect?: IssueLabelWhereUniqueInput[] | undefined;
    delete?: IssueLabelWhereUniqueInput[] | undefined;
    connect?: IssueLabelWhereUniqueInput[] | undefined;
    update?: IssueLabelUpdateWithWhereUniqueWithoutIssueInput[] | undefined;
    updateMany?: IssueLabelUpdateManyWithWhereWithoutIssueInput[] | undefined;
    deleteMany?: IssueLabelScalarWhereInput[] | undefined;
}
