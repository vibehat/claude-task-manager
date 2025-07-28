import { Team } from "../../models/Team";
export declare class CreateManyAndReturnCycle {
    id: string;
    number: number;
    name: string;
    teamId: string;
    startDate: Date;
    endDate: Date;
    progress: number;
    createdAt: Date;
    updatedAt: Date;
    team: Team;
}
