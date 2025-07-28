import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class SyncOperationUpdateManyMutationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    type?: StringFieldUpdateOperationsInput | undefined;
    status?: StringFieldUpdateOperationsInput | undefined;
    source?: StringFieldUpdateOperationsInput | undefined;
    timestamp?: DateTimeFieldUpdateOperationsInput | undefined;
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    data?: StringFieldUpdateOperationsInput | undefined;
    rollbackData?: NullableStringFieldUpdateOperationsInput | undefined;
    metadata?: NullableStringFieldUpdateOperationsInput | undefined;
    retryCount?: IntFieldUpdateOperationsInput | undefined;
    maxRetries?: IntFieldUpdateOperationsInput | undefined;
    error?: NullableStringFieldUpdateOperationsInput | undefined;
    taskIds?: StringFieldUpdateOperationsInput | undefined;
}
