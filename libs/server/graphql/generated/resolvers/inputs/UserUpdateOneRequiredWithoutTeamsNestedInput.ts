import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutTeamsInput } from "../inputs/UserCreateOrConnectWithoutTeamsInput";
import { UserCreateWithoutTeamsInput } from "../inputs/UserCreateWithoutTeamsInput";
import { UserUpdateToOneWithWhereWithoutTeamsInput } from "../inputs/UserUpdateToOneWithWhereWithoutTeamsInput";
import { UserUpsertWithoutTeamsInput } from "../inputs/UserUpsertWithoutTeamsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutTeamsNestedInput", {})
export class UserUpdateOneRequiredWithoutTeamsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutTeamsInput, {
    nullable: true
  })
  create?: UserCreateWithoutTeamsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutTeamsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutTeamsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutTeamsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutTeamsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutTeamsInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutTeamsInput | undefined;
}
