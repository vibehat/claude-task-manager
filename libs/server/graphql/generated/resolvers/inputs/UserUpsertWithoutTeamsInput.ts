import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutTeamsInput } from "../inputs/UserCreateWithoutTeamsInput";
import { UserUpdateWithoutTeamsInput } from "../inputs/UserUpdateWithoutTeamsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutTeamsInput", {})
export class UserUpsertWithoutTeamsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutTeamsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutTeamsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutTeamsInput, {
    nullable: false
  })
  create!: UserCreateWithoutTeamsInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
