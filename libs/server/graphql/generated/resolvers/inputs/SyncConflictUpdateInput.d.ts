import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class SyncConflictUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    operationType?: StringFieldUpdateOperationsInput | undefined;
    taskId?: StringFieldUpdateOperationsInput | undefined;
    uiVersion?: StringFieldUpdateOperationsInput | undefined;
    cliVersion?: StringFieldUpdateOperationsInput | undefined;
    resolved?: BoolFieldUpdateOperationsInput | undefined;
    resolution?: NullableStringFieldUpdateOperationsInput | undefined;
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    resolvedBy?: NullableStringFieldUpdateOperationsInput | undefined;
    timestamp?: DateTimeFieldUpdateOperationsInput | undefined;
}
