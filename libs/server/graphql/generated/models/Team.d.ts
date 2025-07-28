import { Cycle } from "../models/Cycle";
import { TeamMember } from "../models/TeamMember";
import { TeamProject } from "../models/TeamProject";
import { TeamCount } from "../resolvers/outputs/TeamCount";
export declare class Team {
    id: string;
    name: string;
    icon: string;
    joined: boolean;
    color: string;
    members?: TeamMember[];
    projects?: TeamProject[];
    cycles?: Cycle[];
    createdAt: Date;
    updatedAt: Date;
    _count?: TeamCount | null;
}
