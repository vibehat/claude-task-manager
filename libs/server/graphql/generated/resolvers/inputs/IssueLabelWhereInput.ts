import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueRelationFilter } from "../inputs/IssueRelationFilter";
import { LabelRelationFilter } from "../inputs/LabelRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("IssueLabelWhereInput", {})
export class IssueLabelWhereInput {
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
  id?: StringFilter | undefined;

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
