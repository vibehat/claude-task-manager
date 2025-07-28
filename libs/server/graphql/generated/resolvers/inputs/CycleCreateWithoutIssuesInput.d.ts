import { TeamCreateNestedOneWithoutCyclesInput } from "../inputs/TeamCreateNestedOneWithoutCyclesInput";
export declare class CycleCreateWithoutIssuesInput {
    id?: string | undefined;
    number: number;
    name: string;
    startDate: Date;
    endDate: Date;
    progress?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    team: TeamCreateNestedOneWithoutCyclesInput;
}
