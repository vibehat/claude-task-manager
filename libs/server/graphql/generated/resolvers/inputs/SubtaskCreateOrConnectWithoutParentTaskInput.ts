import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubtaskCreateWithoutParentTaskInput } from "../inputs/SubtaskCreateWithoutParentTaskInput";
import { SubtaskWhereUniqueInput } from "../inputs/SubtaskWhereUniqueInput";

@TypeGraphQL.InputType("SubtaskCreateOrConnectWithoutParentTaskInput", {})
export class SubtaskCreateOrConnectWithoutParentTaskInput {
  @TypeGraphQL.Field(_type => SubtaskWhereUniqueInput, {
    nullable: false
  })
  where!: SubtaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubtaskCreateWithoutParentTaskInput, {
    nullable: false
  })
  create!: SubtaskCreateWithoutParentTaskInput;
}
