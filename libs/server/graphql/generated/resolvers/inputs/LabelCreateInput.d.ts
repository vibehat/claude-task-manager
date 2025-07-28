import { IssueLabelCreateNestedManyWithoutLabelInput } from "../inputs/IssueLabelCreateNestedManyWithoutLabelInput";
export declare class LabelCreateInput {
    id?: string | undefined;
    name: string;
    color: string;
    description?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    issues?: IssueLabelCreateNestedManyWithoutLabelInput | undefined;
}
