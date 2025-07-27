import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutAssignedIssuesInput } from "../inputs/UserUpdateWithoutAssignedIssuesInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutAssignedIssuesInput", {})
export class UserUpdateToOneWithWhereWithoutAssignedIssuesInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutAssignedIssuesInput, {
    nullable: false
  })
  data!: UserUpdateWithoutAssignedIssuesInput;
}
