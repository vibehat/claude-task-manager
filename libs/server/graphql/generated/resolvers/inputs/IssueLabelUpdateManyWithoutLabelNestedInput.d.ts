import { IssueLabelCreateManyLabelInputEnvelope } from "../inputs/IssueLabelCreateManyLabelInputEnvelope";
import { IssueLabelCreateOrConnectWithoutLabelInput } from "../inputs/IssueLabelCreateOrConnectWithoutLabelInput";
import { IssueLabelCreateWithoutLabelInput } from "../inputs/IssueLabelCreateWithoutLabelInput";
import { IssueLabelScalarWhereInput } from "../inputs/IssueLabelScalarWhereInput";
import { IssueLabelUpdateManyWithWhereWithoutLabelInput } from "../inputs/IssueLabelUpdateManyWithWhereWithoutLabelInput";
import { IssueLabelUpdateWithWhereUniqueWithoutLabelInput } from "../inputs/IssueLabelUpdateWithWhereUniqueWithoutLabelInput";
import { IssueLabelUpsertWithWhereUniqueWithoutLabelInput } from "../inputs/IssueLabelUpsertWithWhereUniqueWithoutLabelInput";
import { IssueLabelWhereUniqueInput } from "../inputs/IssueLabelWhereUniqueInput";
export declare class IssueLabelUpdateManyWithoutLabelNestedInput {
    create?: IssueLabelCreateWithoutLabelInput[] | undefined;
    connectOrCreate?: IssueLabelCreateOrConnectWithoutLabelInput[] | undefined;
    upsert?: IssueLabelUpsertWithWhereUniqueWithoutLabelInput[] | undefined;
    createMany?: IssueLabelCreateManyLabelInputEnvelope | undefined;
    set?: IssueLabelWhereUniqueInput[] | undefined;
    disconnect?: IssueLabelWhereUniqueInput[] | undefined;
    delete?: IssueLabelWhereUniqueInput[] | undefined;
    connect?: IssueLabelWhereUniqueInput[] | undefined;
    update?: IssueLabelUpdateWithWhereUniqueWithoutLabelInput[] | undefined;
    updateMany?: IssueLabelUpdateManyWithWhereWithoutLabelInput[] | undefined;
    deleteMany?: IssueLabelScalarWhereInput[] | undefined;
}
