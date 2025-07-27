import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCreateOrConnectWithoutProjectsInput } from "../inputs/TeamCreateOrConnectWithoutProjectsInput";
import { TeamCreateWithoutProjectsInput } from "../inputs/TeamCreateWithoutProjectsInput";
import { TeamWhereUniqueInput } from "../inputs/TeamWhereUniqueInput";

@TypeGraphQL.InputType("TeamCreateNestedOneWithoutProjectsInput", {})
export class TeamCreateNestedOneWithoutProjectsInput {
  @TypeGraphQL.Field(_type => TeamCreateWithoutProjectsInput, {
    nullable: true
  })
  create?: TeamCreateWithoutProjectsInput | undefined;

  @TypeGraphQL.Field(_type => TeamCreateOrConnectWithoutProjectsInput, {
    nullable: true
  })
  connectOrCreate?: TeamCreateOrConnectWithoutProjectsInput | undefined;

  @TypeGraphQL.Field(_type => TeamWhereUniqueInput, {
    nullable: true
  })
  connect?: TeamWhereUniqueInput | undefined;
}
