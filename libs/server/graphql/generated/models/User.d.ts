import { Issue } from "../models/Issue";
import { Project } from "../models/Project";
import { TeamMember } from "../models/TeamMember";
import { UserCount } from "../resolvers/outputs/UserCount";
export declare class User {
    id: string;
    name: string;
    email: string;
    avatarUrl?: string | null;
    status: string;
    role: string;
    joinedDate: Date;
    teamIds: string;
    assignedIssues?: Issue[];
    teams?: TeamMember[];
    ledProjects?: Project[];
    createdAt: Date;
    updatedAt: Date;
    _count?: UserCount | null;
}
