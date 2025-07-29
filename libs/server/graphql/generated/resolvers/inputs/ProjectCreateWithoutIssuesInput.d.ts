import { TeamProjectCreateNestedManyWithoutProjectInput } from "../inputs/TeamProjectCreateNestedManyWithoutProjectInput";
import { UserCreateNestedOneWithoutLedProjectsInput } from "../inputs/UserCreateNestedOneWithoutLedProjectsInput";
export declare class ProjectCreateWithoutIssuesInput {
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
    lead?: UserCreateNestedOneWithoutLedProjectsInput | undefined;
    teams?: TeamProjectCreateNestedManyWithoutProjectInput | undefined;
}
