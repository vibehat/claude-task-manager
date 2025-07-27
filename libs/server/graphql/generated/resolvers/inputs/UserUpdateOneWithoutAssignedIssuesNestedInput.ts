import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutAssignedIssuesInput } from "../inputs/UserCreateOrConnectWithoutAssignedIssuesInput";
import { UserCreateWithoutAssignedIssuesInput } from "../inputs/UserCreateWithoutAssignedIssuesInput";
import { UserUpdateToOneWithWhereWithoutAssignedIssuesInput } from "../inputs/UserUpdateToOneWithWhereWithoutAssignedIssuesInput";
import { UserUpsertWithoutAssignedIssuesInput } from "../inputs/UserUpsertWithoutAssignedIssuesInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutAssignedIssuesNestedInput", {})
export class UserUpdateOneWithoutAssignedIssuesNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutAssignedIssuesInput, {
    nullable: true
  })
  create?: UserCreateWithoutAssignedIssuesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAssignedIssuesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutAssignedIssuesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutAssignedIssuesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutAssignedIssuesInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutAssignedIssuesInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutAssignedIssuesInput | undefined;
}
