import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamProjectCreateWithoutProjectInput } from "../inputs/TeamProjectCreateWithoutProjectInput";
import { TeamProjectWhereUniqueInput } from "../inputs/TeamProjectWhereUniqueInput";

@TypeGraphQL.InputType("TeamProjectCreateOrConnectWithoutProjectInput", {})
export class TeamProjectCreateOrConnectWithoutProjectInput {
  @TypeGraphQL.Field(_type => TeamProjectWhereUniqueInput, {
    nullable: false
  })
  where!: TeamProjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => TeamProjectCreateWithoutProjectInput, {
    nullable: false
  })
  create!: TeamProjectCreateWithoutProjectInput;
}
