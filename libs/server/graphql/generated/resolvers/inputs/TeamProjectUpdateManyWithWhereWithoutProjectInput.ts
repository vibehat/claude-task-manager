import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamProjectScalarWhereInput } from "../inputs/TeamProjectScalarWhereInput";
import { TeamProjectUpdateManyMutationInput } from "../inputs/TeamProjectUpdateManyMutationInput";

@TypeGraphQL.InputType("TeamProjectUpdateManyWithWhereWithoutProjectInput", {})
export class TeamProjectUpdateManyWithWhereWithoutProjectInput {
  @TypeGraphQL.Field(_type => TeamProjectScalarWhereInput, {
    nullable: false
  })
  where!: TeamProjectScalarWhereInput;

  @TypeGraphQL.Field(_type => TeamProjectUpdateManyMutationInput, {
    nullable: false
  })
  data!: TeamProjectUpdateManyMutationInput;
}
