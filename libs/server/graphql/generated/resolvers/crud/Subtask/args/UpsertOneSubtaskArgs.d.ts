import { SubtaskCreateInput } from "../../../inputs/SubtaskCreateInput";
import { SubtaskUpdateInput } from "../../../inputs/SubtaskUpdateInput";
import { SubtaskWhereUniqueInput } from "../../../inputs/SubtaskWhereUniqueInput";
export declare class UpsertOneSubtaskArgs {
    where: SubtaskWhereUniqueInput;
    create: SubtaskCreateInput;
    update: SubtaskUpdateInput;
}
