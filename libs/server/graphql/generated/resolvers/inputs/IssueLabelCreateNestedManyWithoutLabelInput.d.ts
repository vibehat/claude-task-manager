import { IssueLabelCreateManyLabelInputEnvelope } from "../inputs/IssueLabelCreateManyLabelInputEnvelope";
import { IssueLabelCreateOrConnectWithoutLabelInput } from "../inputs/IssueLabelCreateOrConnectWithoutLabelInput";
import { IssueLabelCreateWithoutLabelInput } from "../inputs/IssueLabelCreateWithoutLabelInput";
import { IssueLabelWhereUniqueInput } from "../inputs/IssueLabelWhereUniqueInput";
export declare class IssueLabelCreateNestedManyWithoutLabelInput {
    create?: IssueLabelCreateWithoutLabelInput[] | undefined;
    connectOrCreate?: IssueLabelCreateOrConnectWithoutLabelInput[] | undefined;
    createMany?: IssueLabelCreateManyLabelInputEnvelope | undefined;
    connect?: IssueLabelWhereUniqueInput[] | undefined;
}
