import { TeamProjectCreateInput } from "../../../inputs/TeamProjectCreateInput";
import { TeamProjectUpdateInput } from "../../../inputs/TeamProjectUpdateInput";
import { TeamProjectWhereUniqueInput } from "../../../inputs/TeamProjectWhereUniqueInput";
export declare class UpsertOneTeamProjectArgs {
    where: TeamProjectWhereUniqueInput;
    create: TeamProjectCreateInput;
    update: TeamProjectUpdateInput;
}
