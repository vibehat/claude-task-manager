import { IssueLabelCreateInput } from "../../../inputs/IssueLabelCreateInput";
import { IssueLabelUpdateInput } from "../../../inputs/IssueLabelUpdateInput";
import { IssueLabelWhereUniqueInput } from "../../../inputs/IssueLabelWhereUniqueInput";
export declare class UpsertOneIssueLabelArgs {
    where: IssueLabelWhereUniqueInput;
    create: IssueLabelCreateInput;
    update: IssueLabelUpdateInput;
}
