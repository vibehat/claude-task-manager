import { ProjectUpdateOneRequiredWithoutTeamsNestedInput } from "../inputs/ProjectUpdateOneRequiredWithoutTeamsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TeamUpdateOneRequiredWithoutProjectsNestedInput } from "../inputs/TeamUpdateOneRequiredWithoutProjectsNestedInput";
export declare class TeamProjectUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    team?: TeamUpdateOneRequiredWithoutProjectsNestedInput | undefined;
    project?: ProjectUpdateOneRequiredWithoutTeamsNestedInput | undefined;
}
