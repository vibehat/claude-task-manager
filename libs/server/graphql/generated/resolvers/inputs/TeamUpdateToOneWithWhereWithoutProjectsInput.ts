import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamUpdateWithoutProjectsInput } from "../inputs/TeamUpdateWithoutProjectsInput";
import { TeamWhereInput } from "../inputs/TeamWhereInput";

@TypeGraphQL.InputType("TeamUpdateToOneWithWhereWithoutProjectsInput", {})
export class TeamUpdateToOneWithWhereWithoutProjectsInput {
  @TypeGraphQL.Field(_type => TeamWhereInput, {
    nullable: true
  })
  where?: TeamWhereInput | undefined;

  @TypeGraphQL.Field(_type => TeamUpdateWithoutProjectsInput, {
    nullable: false
  })
  data!: TeamUpdateWithoutProjectsInput;
}
