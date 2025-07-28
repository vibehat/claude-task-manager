import { ProjectCreateNestedManyWithoutLeadInput } from "../inputs/ProjectCreateNestedManyWithoutLeadInput";
import { TeamMemberCreateNestedManyWithoutUserInput } from "../inputs/TeamMemberCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutAssignedIssuesInput {
    id?: string | undefined;
    name: string;
    email: string;
    avatarUrl?: string | undefined;
    status?: string | undefined;
    role?: string | undefined;
    joinedDate: Date;
    teamIds?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    teams?: TeamMemberCreateNestedManyWithoutUserInput | undefined;
    ledProjects?: ProjectCreateNestedManyWithoutLeadInput | undefined;
}
