import { StringFilter } from "../inputs/StringFilter";
export declare class IssueLabelScalarWhereInput {
    AND?: IssueLabelScalarWhereInput[] | undefined;
    OR?: IssueLabelScalarWhereInput[] | undefined;
    NOT?: IssueLabelScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    issueId?: StringFilter | undefined;
    labelId?: StringFilter | undefined;
}
