import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IssueUpdateManyWithoutAssigneeNestedInput } from "../inputs/IssueUpdateManyWithoutAssigneeNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProjectUpdateManyWithoutLeadNestedInput } from "../inputs/ProjectUpdateManyWithoutLeadNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class UserUpdateWithoutTeamsInput {
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
    assignedIssues?: IssueUpdateManyWithoutAssigneeNestedInput | undefined;
    ledProjects?: ProjectUpdateManyWithoutLeadNestedInput | undefined;
}
