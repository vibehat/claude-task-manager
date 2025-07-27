import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CycleCreateWithoutTeamInput } from "../inputs/CycleCreateWithoutTeamInput";
import { CycleWhereUniqueInput } from "../inputs/CycleWhereUniqueInput";

@TypeGraphQL.InputType("CycleCreateOrConnectWithoutTeamInput", {})
export class CycleCreateOrConnectWithoutTeamInput {
  @TypeGraphQL.Field(_type => CycleWhereUniqueInput, {
    nullable: false
  })
  where!: CycleWhereUniqueInput;

  @TypeGraphQL.Field(_type => CycleCreateWithoutTeamInput, {
    nullable: false
  })
  create!: CycleCreateWithoutTeamInput;
}
