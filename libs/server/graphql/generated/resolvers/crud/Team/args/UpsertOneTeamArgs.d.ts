import { TeamCreateInput } from "../../../inputs/TeamCreateInput";
import { TeamUpdateInput } from "../../../inputs/TeamUpdateInput";
import { TeamWhereUniqueInput } from "../../../inputs/TeamWhereUniqueInput";
export declare class UpsertOneTeamArgs {
    where: TeamWhereUniqueInput;
    create: TeamCreateInput;
    update: TeamUpdateInput;
}
