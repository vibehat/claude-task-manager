import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamProjectUpdateWithoutProjectInput } from "../inputs/TeamProjectUpdateWithoutProjectInput";
import { TeamProjectWhereUniqueInput } from "../inputs/TeamProjectWhereUniqueInput";

@TypeGraphQL.InputType("TeamProjectUpdateWithWhereUniqueWithoutProjectInput", {})
export class TeamProjectUpdateWithWhereUniqueWithoutProjectInput {
  @TypeGraphQL.Field(_type => TeamProjectWhereUniqueInput, {
    nullable: false
  })
  where!: TeamProjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => TeamProjectUpdateWithoutProjectInput, {
    nullable: false
  })
  data!: TeamProjectUpdateWithoutProjectInput;
}
