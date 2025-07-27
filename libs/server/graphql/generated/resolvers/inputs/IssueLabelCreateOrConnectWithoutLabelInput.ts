import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueLabelCreateWithoutLabelInput } from "../inputs/IssueLabelCreateWithoutLabelInput";
import { IssueLabelWhereUniqueInput } from "../inputs/IssueLabelWhereUniqueInput";

@TypeGraphQL.InputType("IssueLabelCreateOrConnectWithoutLabelInput", {})
export class IssueLabelCreateOrConnectWithoutLabelInput {
  @TypeGraphQL.Field(_type => IssueLabelWhereUniqueInput, {
    nullable: false
  })
  where!: IssueLabelWhereUniqueInput;

  @TypeGraphQL.Field(_type => IssueLabelCreateWithoutLabelInput, {
    nullable: false
  })
  create!: IssueLabelCreateWithoutLabelInput;
}
