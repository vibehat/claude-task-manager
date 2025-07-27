import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamMemberCreateManyUserInput } from "../inputs/TeamMemberCreateManyUserInput";

@TypeGraphQL.InputType("TeamMemberCreateManyUserInputEnvelope", {})
export class TeamMemberCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [TeamMemberCreateManyUserInput], {
    nullable: false
  })
  data!: TeamMemberCreateManyUserInput[];
}
