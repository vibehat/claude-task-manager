import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubtaskUpdateWithoutParentTaskInput } from "../inputs/SubtaskUpdateWithoutParentTaskInput";
import { SubtaskWhereUniqueInput } from "../inputs/SubtaskWhereUniqueInput";

@TypeGraphQL.InputType("SubtaskUpdateWithWhereUniqueWithoutParentTaskInput", {})
export class SubtaskUpdateWithWhereUniqueWithoutParentTaskInput {
  @TypeGraphQL.Field(_type => SubtaskWhereUniqueInput, {
    nullable: false
  })
  where!: SubtaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubtaskUpdateWithoutParentTaskInput, {
    nullable: false
  })
  data!: SubtaskUpdateWithoutParentTaskInput;
}
