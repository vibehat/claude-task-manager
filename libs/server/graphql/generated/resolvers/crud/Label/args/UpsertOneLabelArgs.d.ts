import { LabelCreateInput } from "../../../inputs/LabelCreateInput";
import { LabelUpdateInput } from "../../../inputs/LabelUpdateInput";
import { LabelWhereUniqueInput } from "../../../inputs/LabelWhereUniqueInput";
export declare class UpsertOneLabelArgs {
    where: LabelWhereUniqueInput;
    create: LabelCreateInput;
    update: LabelUpdateInput;
}
