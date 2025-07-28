import { Team } from "../../models/Team";
import { User } from "../../models/User";
export declare class CreateManyAndReturnTeamMember {
    id: string;
    teamId: string;
    userId: string;
    team: Team;
    user: User;
}
