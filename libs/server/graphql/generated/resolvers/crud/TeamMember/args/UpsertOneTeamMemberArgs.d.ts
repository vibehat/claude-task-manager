import { TeamMemberCreateInput } from "../../../inputs/TeamMemberCreateInput";
import { TeamMemberUpdateInput } from "../../../inputs/TeamMemberUpdateInput";
import { TeamMemberWhereUniqueInput } from "../../../inputs/TeamMemberWhereUniqueInput";
export declare class UpsertOneTeamMemberArgs {
    where: TeamMemberWhereUniqueInput;
    create: TeamMemberCreateInput;
    update: TeamMemberUpdateInput;
}
