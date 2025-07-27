import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutLedProjectsInput } from "../inputs/UserCreateOrConnectWithoutLedProjectsInput";
import { UserCreateWithoutLedProjectsInput } from "../inputs/UserCreateWithoutLedProjectsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutLedProjectsInput", {})
export class UserCreateNestedOneWithoutLedProjectsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutLedProjectsInput, {
    nullable: true
  })
  create?: UserCreateWithoutLedProjectsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutLedProjectsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutLedProjectsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
