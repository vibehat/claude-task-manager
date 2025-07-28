import { StringFilter } from "../inputs/StringFilter";
import { TeamRelationFilter } from "../inputs/TeamRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class TeamMemberWhereInput {
    AND?: TeamMemberWhereInput[] | undefined;
    OR?: TeamMemberWhereInput[] | undefined;
    NOT?: TeamMemberWhereInput[] | undefined;
    id?: StringFilter | undefined;
    teamId?: StringFilter | undefined;
    userId?: StringFilter | undefined;
    team?: TeamRelationFilter | undefined;
    user?: UserRelationFilter | undefined;
}
