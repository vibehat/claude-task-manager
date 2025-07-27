import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCreateWithoutProjectsInput } from "../inputs/TeamCreateWithoutProjectsInput";
import { TeamUpdateWithoutProjectsInput } from "../inputs/TeamUpdateWithoutProjectsInput";
import { TeamWhereInput } from "../inputs/TeamWhereInput";

@TypeGraphQL.InputType("TeamUpsertWithoutProjectsInput", {})
export class TeamUpsertWithoutProjectsInput {
  @TypeGraphQL.Field(_type => TeamUpdateWithoutProjectsInput, {
    nullable: false
  })
  update!: TeamUpdateWithoutProjectsInput;

  @TypeGraphQL.Field(_type => TeamCreateWithoutProjectsInput, {
    nullable: false
  })
  create!: TeamCreateWithoutProjectsInput;

  @TypeGraphQL.Field(_type => TeamWhereInput, {
    nullable: true
  })
  where?: TeamWhereInput | undefined;
}
