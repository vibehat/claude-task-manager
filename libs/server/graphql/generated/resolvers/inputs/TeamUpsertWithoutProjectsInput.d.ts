import { TeamCreateWithoutProjectsInput } from "../inputs/TeamCreateWithoutProjectsInput";
import { TeamUpdateWithoutProjectsInput } from "../inputs/TeamUpdateWithoutProjectsInput";
import { TeamWhereInput } from "../inputs/TeamWhereInput";
export declare class TeamUpsertWithoutProjectsInput {
    update: TeamUpdateWithoutProjectsInput;
    create: TeamCreateWithoutProjectsInput;
    where?: TeamWhereInput | undefined;
}
