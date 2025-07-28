import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TeamUpdateOneRequiredWithoutCyclesNestedInput } from "../inputs/TeamUpdateOneRequiredWithoutCyclesNestedInput";
export declare class CycleUpdateWithoutIssuesInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    number?: IntFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    startDate?: DateTimeFieldUpdateOperationsInput | undefined;
    endDate?: DateTimeFieldUpdateOperationsInput | undefined;
    progress?: IntFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    team?: TeamUpdateOneRequiredWithoutCyclesNestedInput | undefined;
}
