import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCreateWithoutCyclesInput } from "../inputs/TeamCreateWithoutCyclesInput";
import { TeamWhereUniqueInput } from "../inputs/TeamWhereUniqueInput";

@TypeGraphQL.InputType("TeamCreateOrConnectWithoutCyclesInput", {})
export class TeamCreateOrConnectWithoutCyclesInput {
  @TypeGraphQL.Field(_type => TeamWhereUniqueInput, {
    nullable: false
  })
  where!: TeamWhereUniqueInput;

  @TypeGraphQL.Field(_type => TeamCreateWithoutCyclesInput, {
    nullable: false
  })
  create!: TeamCreateWithoutCyclesInput;
}
