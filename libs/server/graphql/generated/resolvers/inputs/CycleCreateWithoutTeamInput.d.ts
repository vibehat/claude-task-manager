import { IssueCreateNestedManyWithoutCycleInput } from "../inputs/IssueCreateNestedManyWithoutCycleInput";
export declare class CycleCreateWithoutTeamInput {
    id?: string | undefined;
    number: number;
    name: string;
    startDate: Date;
    endDate: Date;
    progress?: number | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    issues?: IssueCreateNestedManyWithoutCycleInput | undefined;
}
