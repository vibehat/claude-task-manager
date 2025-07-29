import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutTeamsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutTeamsNestedInput";
export declare class TeamMemberUpdateWithoutTeamInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutTeamsNestedInput | undefined;
}
