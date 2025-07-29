import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProjectUpdateManyWithoutLeadNestedInput } from "../inputs/ProjectUpdateManyWithoutLeadNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TeamMemberUpdateManyWithoutUserNestedInput } from "../inputs/TeamMemberUpdateManyWithoutUserNestedInput";
export declare class UserUpdateWithoutAssignedIssuesInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    email?: StringFieldUpdateOperationsInput | undefined;
    avatarUrl?: NullableStringFieldUpdateOperationsInput | undefined;
    status?: StringFieldUpdateOperationsInput | undefined;
    role?: StringFieldUpdateOperationsInput | undefined;
    joinedDate?: DateTimeFieldUpdateOperationsInput | undefined;
    teamIds?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    teams?: TeamMemberUpdateManyWithoutUserNestedInput | undefined;
    ledProjects?: ProjectUpdateManyWithoutLeadNestedInput | undefined;
}
