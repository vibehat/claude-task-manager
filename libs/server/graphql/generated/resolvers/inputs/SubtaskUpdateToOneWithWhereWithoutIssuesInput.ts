import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubtaskUpdateWithoutIssuesInput } from "../inputs/SubtaskUpdateWithoutIssuesInput";
import { SubtaskWhereInput } from "../inputs/SubtaskWhereInput";

@TypeGraphQL.InputType("SubtaskUpdateToOneWithWhereWithoutIssuesInput", {})
export class SubtaskUpdateToOneWithWhereWithoutIssuesInput {
  @TypeGraphQL.Field(_type => SubtaskWhereInput, {
    nullable: true
  })
  where?: SubtaskWhereInput | undefined;

  @TypeGraphQL.Field(_type => SubtaskUpdateWithoutIssuesInput, {
    nullable: false
  })
  data!: SubtaskUpdateWithoutIssuesInput;
}
