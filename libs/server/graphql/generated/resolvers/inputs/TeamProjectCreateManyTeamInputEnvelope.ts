import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamProjectCreateManyTeamInput } from "../inputs/TeamProjectCreateManyTeamInput";

@TypeGraphQL.InputType("TeamProjectCreateManyTeamInputEnvelope", {})
export class TeamProjectCreateManyTeamInputEnvelope {
  @TypeGraphQL.Field(_type => [TeamProjectCreateManyTeamInput], {
    nullable: false
  })
  data!: TeamProjectCreateManyTeamInput[];
}
