import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamProjectCreateManyProjectInput } from "../inputs/TeamProjectCreateManyProjectInput";

@TypeGraphQL.InputType("TeamProjectCreateManyProjectInputEnvelope", {})
export class TeamProjectCreateManyProjectInputEnvelope {
  @TypeGraphQL.Field(_type => [TeamProjectCreateManyProjectInput], {
    nullable: false
  })
  data!: TeamProjectCreateManyProjectInput[];
}
