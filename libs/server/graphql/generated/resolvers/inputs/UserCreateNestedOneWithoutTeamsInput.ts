import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutTeamsInput } from "../inputs/UserCreateOrConnectWithoutTeamsInput";
import { UserCreateWithoutTeamsInput } from "../inputs/UserCreateWithoutTeamsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutTeamsInput", {})
export class UserCreateNestedOneWithoutTeamsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTeamsInput, {
    nullable: true
  })
  create?: UserCreateWithoutTeamsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTeamsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTeamsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
