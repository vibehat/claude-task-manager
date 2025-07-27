import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CycleUpdateWithoutTeamInput } from "../inputs/CycleUpdateWithoutTeamInput";
import { CycleWhereUniqueInput } from "../inputs/CycleWhereUniqueInput";

@TypeGraphQL.InputType("CycleUpdateWithWhereUniqueWithoutTeamInput", {})
export class CycleUpdateWithWhereUniqueWithoutTeamInput {
  @TypeGraphQL.Field(_type => CycleWhereUniqueInput, {
    nullable: false
  })
  where!: CycleWhereUniqueInput;

  @TypeGraphQL.Field(_type => CycleUpdateWithoutTeamInput, {
    nullable: false
  })
  data!: CycleUpdateWithoutTeamInput;
}
