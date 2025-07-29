import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IssueListRelationFilter } from "../inputs/IssueListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TeamRelationFilter } from "../inputs/TeamRelationFilter";
export declare class CycleWhereInput {
    AND?: CycleWhereInput[] | undefined;
    OR?: CycleWhereInput[] | undefined;
    NOT?: CycleWhereInput[] | undefined;
    id?: StringFilter | undefined;
    number?: IntFilter | undefined;
    name?: StringFilter | undefined;
    teamId?: StringFilter | undefined;
    startDate?: DateTimeFilter | undefined;
    endDate?: DateTimeFilter | undefined;
    progress?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    team?: TeamRelationFilter | undefined;
    issues?: IssueListRelationFilter | undefined;
}
