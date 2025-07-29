import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IssueLabelListRelationFilter } from "../inputs/IssueLabelListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class LabelWhereInput {
    AND?: LabelWhereInput[] | undefined;
    OR?: LabelWhereInput[] | undefined;
    NOT?: LabelWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    color?: StringFilter | undefined;
    description?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    issues?: IssueLabelListRelationFilter | undefined;
}
