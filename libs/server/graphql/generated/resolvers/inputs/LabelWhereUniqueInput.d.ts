import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IssueLabelListRelationFilter } from "../inputs/IssueLabelListRelationFilter";
import { LabelWhereInput } from "../inputs/LabelWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class LabelWhereUniqueInput {
    id?: string | undefined;
    AND?: LabelWhereInput[] | undefined;
    OR?: LabelWhereInput[] | undefined;
    NOT?: LabelWhereInput[] | undefined;
    name?: StringFilter | undefined;
    color?: StringFilter | undefined;
    description?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    issues?: IssueLabelListRelationFilter | undefined;
}
