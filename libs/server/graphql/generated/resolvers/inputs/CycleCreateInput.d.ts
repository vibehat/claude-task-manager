import { IssueCreateNestedManyWithoutCycleInput } from "../inputs/IssueCreateNestedManyWithoutCycleInput";
import { TeamCreateNestedOneWithoutCyclesInput } from "../inputs/TeamCreateNestedOneWithoutCyclesInput";
export declare class CycleCreateInput {
    id?: string | undefined;
    number: number;
    name: string;
    startDate: Date;
    endDate: Date;
    progress?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    team: TeamCreateNestedOneWithoutCyclesInput;
    issues?: IssueCreateNestedManyWithoutCycleInput | undefined;
}
