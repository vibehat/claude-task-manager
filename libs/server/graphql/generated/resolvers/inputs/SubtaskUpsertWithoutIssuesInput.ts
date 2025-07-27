import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubtaskCreateWithoutIssuesInput } from "../inputs/SubtaskCreateWithoutIssuesInput";
import { SubtaskUpdateWithoutIssuesInput } from "../inputs/SubtaskUpdateWithoutIssuesInput";
import { SubtaskWhereInput } from "../inputs/SubtaskWhereInput";

@TypeGraphQL.InputType("SubtaskUpsertWithoutIssuesInput", {})
export class SubtaskUpsertWithoutIssuesInput {
  @TypeGraphQL.Field(_type => SubtaskUpdateWithoutIssuesInput, {
    nullable: false
  })
  update!: SubtaskUpdateWithoutIssuesInput;

  @TypeGraphQL.Field(_type => SubtaskCreateWithoutIssuesInput, {
    nullable: false
  })
  create!: SubtaskCreateWithoutIssuesInput;

  @TypeGraphQL.Field(_type => SubtaskWhereInput, {
    nullable: true
  })
  where?: SubtaskWhereInput | undefined;
}
