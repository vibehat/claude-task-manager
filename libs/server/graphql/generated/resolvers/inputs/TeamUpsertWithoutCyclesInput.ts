import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCreateWithoutCyclesInput } from "../inputs/TeamCreateWithoutCyclesInput";
import { TeamUpdateWithoutCyclesInput } from "../inputs/TeamUpdateWithoutCyclesInput";
import { TeamWhereInput } from "../inputs/TeamWhereInput";

@TypeGraphQL.InputType("TeamUpsertWithoutCyclesInput", {})
export class TeamUpsertWithoutCyclesInput {
  @TypeGraphQL.Field(_type => TeamUpdateWithoutCyclesInput, {
    nullable: false
  })
  update!: TeamUpdateWithoutCyclesInput;

  @TypeGraphQL.Field(_type => TeamCreateWithoutCyclesInput, {
    nullable: false
  })
  create!: TeamCreateWithoutCyclesInput;

  @TypeGraphQL.Field(_type => TeamWhereInput, {
    nullable: true
  })
  where?: TeamWhereInput | undefined;
}
