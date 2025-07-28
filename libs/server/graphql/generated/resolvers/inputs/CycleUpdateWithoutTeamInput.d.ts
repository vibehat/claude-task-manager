import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { IssueUpdateManyWithoutCycleNestedInput } from "../inputs/IssueUpdateManyWithoutCycleNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class CycleUpdateWithoutTeamInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    number?: IntFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    startDate?: DateTimeFieldUpdateOperationsInput | undefined;
    endDate?: DateTimeFieldUpdateOperationsInput | undefined;
    progress?: IntFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    issues?: IssueUpdateManyWithoutCycleNestedInput | undefined;
}
