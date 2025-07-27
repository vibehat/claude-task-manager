import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamUpdateWithoutCyclesInput } from "../inputs/TeamUpdateWithoutCyclesInput";
import { TeamWhereInput } from "../inputs/TeamWhereInput";

@TypeGraphQL.InputType("TeamUpdateToOneWithWhereWithoutCyclesInput", {})
export class TeamUpdateToOneWithWhereWithoutCyclesInput {
  @TypeGraphQL.Field(_type => TeamWhereInput, {
    nullable: true
  })
  where?: TeamWhereInput | undefined;

  @TypeGraphQL.Field(_type => TeamUpdateWithoutCyclesInput, {
    nullable: false
  })
  data!: TeamUpdateWithoutCyclesInput;
}
