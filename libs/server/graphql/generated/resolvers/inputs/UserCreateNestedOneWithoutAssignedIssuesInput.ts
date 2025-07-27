import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutAssignedIssuesInput } from "../inputs/UserCreateOrConnectWithoutAssignedIssuesInput";
import { UserCreateWithoutAssignedIssuesInput } from "../inputs/UserCreateWithoutAssignedIssuesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutAssignedIssuesInput", {})
export class UserCreateNestedOneWithoutAssignedIssuesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutAssignedIssuesInput, {
    nullable: true
  })
  create?: UserCreateWithoutAssignedIssuesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAssignedIssuesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutAssignedIssuesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
