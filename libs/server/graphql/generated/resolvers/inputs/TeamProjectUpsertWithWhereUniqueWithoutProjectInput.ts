import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamProjectCreateWithoutProjectInput } from "../inputs/TeamProjectCreateWithoutProjectInput";
import { TeamProjectUpdateWithoutProjectInput } from "../inputs/TeamProjectUpdateWithoutProjectInput";
import { TeamProjectWhereUniqueInput } from "../inputs/TeamProjectWhereUniqueInput";

@TypeGraphQL.InputType("TeamProjectUpsertWithWhereUniqueWithoutProjectInput", {})
export class TeamProjectUpsertWithWhereUniqueWithoutProjectInput {
  @TypeGraphQL.Field(_type => TeamProjectWhereUniqueInput, {
    nullable: false
  })
  where!: TeamProjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => TeamProjectUpdateWithoutProjectInput, {
    nullable: false
  })
  update!: TeamProjectUpdateWithoutProjectInput;

  @TypeGraphQL.Field(_type => TeamProjectCreateWithoutProjectInput, {
    nullable: false
  })
  create!: TeamProjectCreateWithoutProjectInput;
}
