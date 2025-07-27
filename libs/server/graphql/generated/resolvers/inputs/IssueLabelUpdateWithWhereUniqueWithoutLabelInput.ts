import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueLabelUpdateWithoutLabelInput } from "../inputs/IssueLabelUpdateWithoutLabelInput";
import { IssueLabelWhereUniqueInput } from "../inputs/IssueLabelWhereUniqueInput";

@TypeGraphQL.InputType("IssueLabelUpdateWithWhereUniqueWithoutLabelInput", {})
export class IssueLabelUpdateWithWhereUniqueWithoutLabelInput {
  @TypeGraphQL.Field(_type => IssueLabelWhereUniqueInput, {
    nullable: false
  })
  where!: IssueLabelWhereUniqueInput;

  @TypeGraphQL.Field(_type => IssueLabelUpdateWithoutLabelInput, {
    nullable: false
  })
  data!: IssueLabelUpdateWithoutLabelInput;
}
