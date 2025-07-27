import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CycleCreateWithoutTeamInput } from "../inputs/CycleCreateWithoutTeamInput";
import { CycleUpdateWithoutTeamInput } from "../inputs/CycleUpdateWithoutTeamInput";
import { CycleWhereUniqueInput } from "../inputs/CycleWhereUniqueInput";

@TypeGraphQL.InputType("CycleUpsertWithWhereUniqueWithoutTeamInput", {})
export class CycleUpsertWithWhereUniqueWithoutTeamInput {
  @TypeGraphQL.Field(_type => CycleWhereUniqueInput, {
    nullable: false
  })
  where!: CycleWhereUniqueInput;

  @TypeGraphQL.Field(_type => CycleUpdateWithoutTeamInput, {
    nullable: false
  })
  update!: CycleUpdateWithoutTeamInput;

  @TypeGraphQL.Field(_type => CycleCreateWithoutTeamInput, {
    nullable: false
  })
  create!: CycleCreateWithoutTeamInput;
}
