import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssuePriorityCreateWithoutIssuesInput } from "../inputs/IssuePriorityCreateWithoutIssuesInput";
import { IssuePriorityWhereUniqueInput } from "../inputs/IssuePriorityWhereUniqueInput";

@TypeGraphQL.InputType("IssuePriorityCreateOrConnectWithoutIssuesInput", {})
export class IssuePriorityCreateOrConnectWithoutIssuesInput {
  @TypeGraphQL.Field(_type => IssuePriorityWhereUniqueInput, {
    nullable: false
  })
  where!: IssuePriorityWhereUniqueInput;

  @TypeGraphQL.Field(_type => IssuePriorityCreateWithoutIssuesInput, {
    nullable: false
  })
  create!: IssuePriorityCreateWithoutIssuesInput;
}
