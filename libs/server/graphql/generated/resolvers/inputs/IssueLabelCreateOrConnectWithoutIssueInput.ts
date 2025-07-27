import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueLabelCreateWithoutIssueInput } from "../inputs/IssueLabelCreateWithoutIssueInput";
import { IssueLabelWhereUniqueInput } from "../inputs/IssueLabelWhereUniqueInput";

@TypeGraphQL.InputType("IssueLabelCreateOrConnectWithoutIssueInput", {})
export class IssueLabelCreateOrConnectWithoutIssueInput {
  @TypeGraphQL.Field(_type => IssueLabelWhereUniqueInput, {
    nullable: false
  })
  where!: IssueLabelWhereUniqueInput;

  @TypeGraphQL.Field(_type => IssueLabelCreateWithoutIssueInput, {
    nullable: false
  })
  create!: IssueLabelCreateWithoutIssueInput;
}
