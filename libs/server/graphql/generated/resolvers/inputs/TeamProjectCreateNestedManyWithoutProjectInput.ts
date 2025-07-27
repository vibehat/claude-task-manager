import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamProjectCreateManyProjectInputEnvelope } from "../inputs/TeamProjectCreateManyProjectInputEnvelope";
import { TeamProjectCreateOrConnectWithoutProjectInput } from "../inputs/TeamProjectCreateOrConnectWithoutProjectInput";
import { TeamProjectCreateWithoutProjectInput } from "../inputs/TeamProjectCreateWithoutProjectInput";
import { TeamProjectWhereUniqueInput } from "../inputs/TeamProjectWhereUniqueInput";

@TypeGraphQL.InputType("TeamProjectCreateNestedManyWithoutProjectInput", {})
export class TeamProjectCreateNestedManyWithoutProjectInput {
  @TypeGraphQL.Field(_type => [TeamProjectCreateWithoutProjectInput], {
    nullable: true
  })
  create?: TeamProjectCreateWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamProjectCreateOrConnectWithoutProjectInput], {
    nullable: true
  })
  connectOrCreate?: TeamProjectCreateOrConnectWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => TeamProjectCreateManyProjectInputEnvelope, {
    nullable: true
  })
  createMany?: TeamProjectCreateManyProjectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TeamProjectWhereUniqueInput], {
    nullable: true
  })
  connect?: TeamProjectWhereUniqueInput[] | undefined;
}
