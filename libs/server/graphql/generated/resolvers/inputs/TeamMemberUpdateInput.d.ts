import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TeamUpdateOneRequiredWithoutMembersNestedInput } from "../inputs/TeamUpdateOneRequiredWithoutMembersNestedInput";
import { UserUpdateOneRequiredWithoutTeamsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutTeamsNestedInput";
export declare class TeamMemberUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput | undefined;
    user?: UserUpdateOneRequiredWithoutTeamsNestedInput | undefined;
}
