import { Issue } from "../models/Issue";
import { Team } from "../models/Team";
import { CycleCount } from "../resolvers/outputs/CycleCount";
export declare class Cycle {
    id: string;
    number: number;
    name: string;
    teamId: string;
    startDate: Date;
    endDate: Date;
    progress: number;
    team?: Team;
    issues?: Issue[];
    createdAt: Date;
    updatedAt: Date;
    _count?: CycleCount | null;
}
