import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueLabelIssueIdLabelIdCompoundUniqueInput } from "../inputs/IssueLabelIssueIdLabelIdCompoundUniqueInput";
import { IssueLabelWhereInput } from "../inputs/IssueLabelWhereInput";
import { IssueRelationFilter } from "../inputs/IssueRelationFilter";
import { LabelRelationFilter } from "../inputs/LabelRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("IssueLabelWhereUniqueInput", {})
export class IssueLabelWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => IssueLabelIssueIdLabelIdCompoundUniqueInput, {
    nullable: true
  })
  issueId_labelId?: IssueLabelIssueIdLabelIdCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelWhereInput], {
    nullable: true
  })
  AND?: IssueLabelWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelWhereInput], {
    nullable: true
  })
  OR?: IssueLabelWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelWhereInput], {
    nullable: true
  })
  NOT?: IssueLabelWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  issueId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  labelId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IssueRelationFilter, {
    nullable: true
  })
  issue?: IssueRelationFilter | undefined;

  @TypeGraphQL.Field(_type => LabelRelationFilter, {
    nullable: true
  })
  label?: LabelRelationFilter | undefined;
}
