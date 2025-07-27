import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueLabelUpdateWithoutIssueInput } from "../inputs/IssueLabelUpdateWithoutIssueInput";
import { IssueLabelWhereUniqueInput } from "../inputs/IssueLabelWhereUniqueInput";

@TypeGraphQL.InputType("IssueLabelUpdateWithWhereUniqueWithoutIssueInput", {})
export class IssueLabelUpdateWithWhereUniqueWithoutIssueInput {
  @TypeGraphQL.Field(_type => IssueLabelWhereUniqueInput, {
    nullable: false
  })
  where!: IssueLabelWhereUniqueInput;

  @TypeGraphQL.Field(_type => IssueLabelUpdateWithoutIssueInput, {
    nullable: false
  })
  data!: IssueLabelUpdateWithoutIssueInput;
}
