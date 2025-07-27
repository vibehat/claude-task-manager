import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutAssignedIssuesInput } from "../inputs/UserCreateWithoutAssignedIssuesInput";
import { UserUpdateWithoutAssignedIssuesInput } from "../inputs/UserUpdateWithoutAssignedIssuesInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutAssignedIssuesInput", {})
export class UserUpsertWithoutAssignedIssuesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutAssignedIssuesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutAssignedIssuesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutAssignedIssuesInput, {
    nullable: false
  })
  create!: UserCreateWithoutAssignedIssuesInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
