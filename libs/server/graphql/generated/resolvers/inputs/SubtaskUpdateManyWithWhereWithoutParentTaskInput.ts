import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubtaskScalarWhereInput } from "../inputs/SubtaskScalarWhereInput";
import { SubtaskUpdateManyMutationInput } from "../inputs/SubtaskUpdateManyMutationInput";

@TypeGraphQL.InputType("SubtaskUpdateManyWithWhereWithoutParentTaskInput", {})
export class SubtaskUpdateManyWithWhereWithoutParentTaskInput {
  @TypeGraphQL.Field(_type => SubtaskScalarWhereInput, {
    nullable: false
  })
  where!: SubtaskScalarWhereInput;

  @TypeGraphQL.Field(_type => SubtaskUpdateManyMutationInput, {
    nullable: false
  })
  data!: SubtaskUpdateManyMutationInput;
}
