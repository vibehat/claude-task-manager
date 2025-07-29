import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { IssueUpdateManyWithoutProjectNestedInput } from "../inputs/IssueUpdateManyWithoutProjectNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutLedProjectsNestedInput } from "../inputs/UserUpdateOneWithoutLedProjectsNestedInput";
export declare class ProjectUpdateWithoutTeamsInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    color?: NullableStringFieldUpdateOperationsInput | undefined;
    identifier?: NullableStringFieldUpdateOperationsInput | undefined;
    icon?: NullableStringFieldUpdateOperationsInput | undefined;
    percentComplete?: IntFieldUpdateOperationsInput | undefined;
    startDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    health?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    issues?: IssueUpdateManyWithoutProjectNestedInput | undefined;
    lead?: UserUpdateOneWithoutLedProjectsNestedInput | undefined;
}
