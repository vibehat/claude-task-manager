import { TeamCreateWithoutCyclesInput } from "../inputs/TeamCreateWithoutCyclesInput";
import { TeamUpdateWithoutCyclesInput } from "../inputs/TeamUpdateWithoutCyclesInput";
import { TeamWhereInput } from "../inputs/TeamWhereInput";
export declare class TeamUpsertWithoutCyclesInput {
    update: TeamUpdateWithoutCyclesInput;
    create: TeamCreateWithoutCyclesInput;
    where?: TeamWhereInput | undefined;
}
