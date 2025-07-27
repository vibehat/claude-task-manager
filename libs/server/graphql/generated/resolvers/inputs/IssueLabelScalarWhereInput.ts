import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("IssueLabelScalarWhereInput", {})
export class IssueLabelScalarWhereInput {
  @TypeGraphQL.Field(_type => [IssueLabelScalarWhereInput], {
    nullable: true
  })
  AND?: IssueLabelScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelScalarWhereInput], {
    nullable: true
  })
  OR?: IssueLabelScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelScalarWhereInput], {
    nullable: true
  })
  NOT?: IssueLabelScalarWhereInput[] | undefined;

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
}
