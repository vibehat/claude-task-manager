import { IssueCreateNestedManyWithoutAssigneeInput } from "../inputs/IssueCreateNestedManyWithoutAssigneeInput";
import { TeamMemberCreateNestedManyWithoutUserInput } from "../inputs/TeamMemberCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutLedProjectsInput {
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
    assignedIssues?: IssueCreateNestedManyWithoutAssigneeInput | undefined;
    teams?: TeamMemberCreateNestedManyWithoutUserInput | undefined;
}
