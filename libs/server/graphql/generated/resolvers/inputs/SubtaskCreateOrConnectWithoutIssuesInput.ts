import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubtaskCreateWithoutIssuesInput } from "../inputs/SubtaskCreateWithoutIssuesInput";
import { SubtaskWhereUniqueInput } from "../inputs/SubtaskWhereUniqueInput";

@TypeGraphQL.InputType("SubtaskCreateOrConnectWithoutIssuesInput", {})
export class SubtaskCreateOrConnectWithoutIssuesInput {
  @TypeGraphQL.Field(_type => SubtaskWhereUniqueInput, {
    nullable: false
  })
  where!: SubtaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubtaskCreateWithoutIssuesInput, {
    nullable: false
  })
  create!: SubtaskCreateWithoutIssuesInput;
}
