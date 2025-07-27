import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamProjectCreateWithoutTeamInput } from "../inputs/TeamProjectCreateWithoutTeamInput";
import { TeamProjectUpdateWithoutTeamInput } from "../inputs/TeamProjectUpdateWithoutTeamInput";
import { TeamProjectWhereUniqueInput } from "../inputs/TeamProjectWhereUniqueInput";

@TypeGraphQL.InputType("TeamProjectUpsertWithWhereUniqueWithoutTeamInput", {})
export class TeamProjectUpsertWithWhereUniqueWithoutTeamInput {
  @TypeGraphQL.Field(_type => TeamProjectWhereUniqueInput, {
    nullable: false
  })
  where!: TeamProjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => TeamProjectUpdateWithoutTeamInput, {
    nullable: false
  })
  update!: TeamProjectUpdateWithoutTeamInput;

  @TypeGraphQL.Field(_type => TeamProjectCreateWithoutTeamInput, {
    nullable: false
  })
  create!: TeamProjectCreateWithoutTeamInput;
}
