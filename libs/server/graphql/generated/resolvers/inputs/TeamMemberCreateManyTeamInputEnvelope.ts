import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamMemberCreateManyTeamInput } from "../inputs/TeamMemberCreateManyTeamInput";

@TypeGraphQL.InputType("TeamMemberCreateManyTeamInputEnvelope", {})
export class TeamMemberCreateManyTeamInputEnvelope {
  @TypeGraphQL.Field(_type => [TeamMemberCreateManyTeamInput], {
    nullable: false
  })
  data!: TeamMemberCreateManyTeamInput[];
}
