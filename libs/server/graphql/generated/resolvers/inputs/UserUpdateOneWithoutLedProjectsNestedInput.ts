import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutLedProjectsInput } from "../inputs/UserCreateOrConnectWithoutLedProjectsInput";
import { UserCreateWithoutLedProjectsInput } from "../inputs/UserCreateWithoutLedProjectsInput";
import { UserUpdateToOneWithWhereWithoutLedProjectsInput } from "../inputs/UserUpdateToOneWithWhereWithoutLedProjectsInput";
import { UserUpsertWithoutLedProjectsInput } from "../inputs/UserUpsertWithoutLedProjectsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutLedProjectsNestedInput", {})
export class UserUpdateOneWithoutLedProjectsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutLedProjectsInput, {
    nullable: true
  })
  create?: UserCreateWithoutLedProjectsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutLedProjectsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutLedProjectsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutLedProjectsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutLedProjectsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  disconnect?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  delete?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutLedProjectsInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutLedProjectsInput | undefined;
}
