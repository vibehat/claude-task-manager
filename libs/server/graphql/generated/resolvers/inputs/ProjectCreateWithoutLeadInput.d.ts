import { IssueCreateNestedManyWithoutProjectInput } from "../inputs/IssueCreateNestedManyWithoutProjectInput";
import { TeamProjectCreateNestedManyWithoutProjectInput } from "../inputs/TeamProjectCreateNestedManyWithoutProjectInput";
export declare class ProjectCreateWithoutLeadInput {
    id?: string | undefined;
    name: string;
    description?: string | undefined;
    color?: string | undefined;
    identifier?: string | undefined;
    icon?: string | undefined;
    percentComplete?: number | undefined;
    startDate?: Date | undefined;
    health?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    issues?: IssueCreateNestedManyWithoutProjectInput | undefined;
    teams?: TeamProjectCreateNestedManyWithoutProjectInput | undefined;
}
