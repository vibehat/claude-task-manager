import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class CycleScalarWhereInput {
    AND?: CycleScalarWhereInput[] | undefined;
    OR?: CycleScalarWhereInput[] | undefined;
    NOT?: CycleScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    number?: IntFilter | undefined;
    name?: StringFilter | undefined;
    teamId?: StringFilter | undefined;
    startDate?: DateTimeFilter | undefined;
    endDate?: DateTimeFilter | undefined;
    progress?: IntFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
