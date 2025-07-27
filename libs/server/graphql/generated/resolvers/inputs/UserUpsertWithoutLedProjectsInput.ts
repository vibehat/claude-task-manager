import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutLedProjectsInput } from "../inputs/UserCreateWithoutLedProjectsInput";
import { UserUpdateWithoutLedProjectsInput } from "../inputs/UserUpdateWithoutLedProjectsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutLedProjectsInput", {})
export class UserUpsertWithoutLedProjectsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutLedProjectsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutLedProjectsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutLedProjectsInput, {
    nullable: false
  })
  create!: UserCreateWithoutLedProjectsInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
