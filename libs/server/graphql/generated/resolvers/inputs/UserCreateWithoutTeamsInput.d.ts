import { IssueCreateNestedManyWithoutAssigneeInput } from "../inputs/IssueCreateNestedManyWithoutAssigneeInput";
import { ProjectCreateNestedManyWithoutLeadInput } from "../inputs/ProjectCreateNestedManyWithoutLeadInput";
export declare class UserCreateWithoutTeamsInput {
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
    ledProjects?: ProjectCreateNestedManyWithoutLeadInput | undefined;
}
