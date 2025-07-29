import { Issue } from "../models/Issue";
import { TeamProject } from "../models/TeamProject";
import { User } from "../models/User";
import { ProjectCount } from "../resolvers/outputs/ProjectCount";
export declare class Project {
    id: string;
    name: string;
    description?: string | null;
    color?: string | null;
    identifier?: string | null;
    icon?: string | null;
    percentComplete: number;
    startDate?: Date | null;
    health: string;
    leadId?: string | null;
    issues?: Issue[];
    lead?: User | null;
    teams?: TeamProject[];
    createdAt: Date;
    updatedAt: Date;
    _count?: ProjectCount | null;
}
