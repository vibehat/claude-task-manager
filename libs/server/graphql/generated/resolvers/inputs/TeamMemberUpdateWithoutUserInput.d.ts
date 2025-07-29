import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TeamUpdateOneRequiredWithoutMembersNestedInput } from "../inputs/TeamUpdateOneRequiredWithoutMembersNestedInput";
export declare class TeamMemberUpdateWithoutUserInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput | undefined;
}
