import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CycleScalarWhereInput } from "../inputs/CycleScalarWhereInput";
import { CycleUpdateManyMutationInput } from "../inputs/CycleUpdateManyMutationInput";

@TypeGraphQL.InputType("CycleUpdateManyWithWhereWithoutTeamInput", {})
export class CycleUpdateManyWithWhereWithoutTeamInput {
  @TypeGraphQL.Field(_type => CycleScalarWhereInput, {
    nullable: false
  })
  where!: CycleScalarWhereInput;

  @TypeGraphQL.Field(_type => CycleUpdateManyMutationInput, {
    nullable: false
  })
  data!: CycleUpdateManyMutationInput;
}
