import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CycleCreateManyTeamInput } from "../inputs/CycleCreateManyTeamInput";

@TypeGraphQL.InputType("CycleCreateManyTeamInputEnvelope", {})
export class CycleCreateManyTeamInputEnvelope {
  @TypeGraphQL.Field(_type => [CycleCreateManyTeamInput], {
    nullable: false
  })
  data!: CycleCreateManyTeamInput[];
}
