import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamProjectUpdateWithoutTeamInput } from "../inputs/TeamProjectUpdateWithoutTeamInput";
import { TeamProjectWhereUniqueInput } from "../inputs/TeamProjectWhereUniqueInput";

@TypeGraphQL.InputType("TeamProjectUpdateWithWhereUniqueWithoutTeamInput", {})
export class TeamProjectUpdateWithWhereUniqueWithoutTeamInput {
  @TypeGraphQL.Field(_type => TeamProjectWhereUniqueInput, {
    nullable: false
  })
  where!: TeamProjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => TeamProjectUpdateWithoutTeamInput, {
    nullable: false
  })
  data!: TeamProjectUpdateWithoutTeamInput;
}
