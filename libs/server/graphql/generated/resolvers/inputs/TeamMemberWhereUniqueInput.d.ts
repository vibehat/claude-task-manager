import { StringFilter } from "../inputs/StringFilter";
import { TeamMemberTeamIdUserIdCompoundUniqueInput } from "../inputs/TeamMemberTeamIdUserIdCompoundUniqueInput";
import { TeamMemberWhereInput } from "../inputs/TeamMemberWhereInput";
import { TeamRelationFilter } from "../inputs/TeamRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class TeamMemberWhereUniqueInput {
    id?: string | undefined;
    teamId_userId?: TeamMemberTeamIdUserIdCompoundUniqueInput | undefined;
    AND?: TeamMemberWhereInput[] | undefined;
    OR?: TeamMemberWhereInput[] | undefined;
    NOT?: TeamMemberWhereInput[] | undefined;
    teamId?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    team?: TeamRelationFilter | undefined;
    user?: UserRelationFilter | undefined;
}
