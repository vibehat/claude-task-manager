import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CycleUpdateManyWithoutTeamNestedInput } from "../inputs/CycleUpdateManyWithoutTeamNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TeamMemberUpdateManyWithoutTeamNestedInput } from "../inputs/TeamMemberUpdateManyWithoutTeamNestedInput";
import { TeamProjectUpdateManyWithoutTeamNestedInput } from "../inputs/TeamProjectUpdateManyWithoutTeamNestedInput";
export declare class TeamUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    icon?: StringFieldUpdateOperationsInput | undefined;
    joined?: BoolFieldUpdateOperationsInput | undefined;
    color?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    members?: TeamMemberUpdateManyWithoutTeamNestedInput | undefined;
    projects?: TeamProjectUpdateManyWithoutTeamNestedInput | undefined;
    cycles?: CycleUpdateManyWithoutTeamNestedInput | undefined;
}
