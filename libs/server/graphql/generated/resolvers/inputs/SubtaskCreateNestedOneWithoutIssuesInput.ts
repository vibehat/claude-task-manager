import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubtaskCreateOrConnectWithoutIssuesInput } from "../inputs/SubtaskCreateOrConnectWithoutIssuesInput";
import { SubtaskCreateWithoutIssuesInput } from "../inputs/SubtaskCreateWithoutIssuesInput";
import { SubtaskWhereUniqueInput } from "../inputs/SubtaskWhereUniqueInput";

@TypeGraphQL.InputType("SubtaskCreateNestedOneWithoutIssuesInput", {})
export class SubtaskCreateNestedOneWithoutIssuesInput {
  @TypeGraphQL.Field(_type => SubtaskCreateWithoutIssuesInput, {
    nullable: true
  })
  create?: SubtaskCreateWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => SubtaskCreateOrConnectWithoutIssuesInput, {
    nullable: true
  })
  connectOrCreate?: SubtaskCreateOrConnectWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => SubtaskWhereUniqueInput, {
    nullable: true
  })
  connect?: SubtaskWhereUniqueInput | undefined;
}
