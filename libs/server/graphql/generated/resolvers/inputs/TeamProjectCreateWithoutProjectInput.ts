import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCreateNestedOneWithoutProjectsInput } from "../inputs/TeamCreateNestedOneWithoutProjectsInput";

@TypeGraphQL.InputType("TeamProjectCreateWithoutProjectInput", {})
export class TeamProjectCreateWithoutProjectInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => TeamCreateNestedOneWithoutProjectsInput, {
    nullable: false
  })
  team!: TeamCreateNestedOneWithoutProjectsInput;
}
