import { IssueCreateNestedManyWithoutProjectInput } from "../inputs/IssueCreateNestedManyWithoutProjectInput";
import { UserCreateNestedOneWithoutLedProjectsInput } from "../inputs/UserCreateNestedOneWithoutLedProjectsInput";
export declare class ProjectCreateWithoutTeamsInput {
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
    lead?: UserCreateNestedOneWithoutLedProjectsInput | undefined;
}
