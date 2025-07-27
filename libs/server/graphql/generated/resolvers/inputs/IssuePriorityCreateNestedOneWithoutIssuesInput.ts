import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssuePriorityCreateOrConnectWithoutIssuesInput } from "../inputs/IssuePriorityCreateOrConnectWithoutIssuesInput";
import { IssuePriorityCreateWithoutIssuesInput } from "../inputs/IssuePriorityCreateWithoutIssuesInput";
import { IssuePriorityWhereUniqueInput } from "../inputs/IssuePriorityWhereUniqueInput";

@TypeGraphQL.InputType("IssuePriorityCreateNestedOneWithoutIssuesInput", {})
export class IssuePriorityCreateNestedOneWithoutIssuesInput {
  @TypeGraphQL.Field(_type => IssuePriorityCreateWithoutIssuesInput, {
    nullable: true
  })
  create?: IssuePriorityCreateWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => IssuePriorityCreateOrConnectWithoutIssuesInput, {
    nullable: true
  })
  connectOrCreate?: IssuePriorityCreateOrConnectWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => IssuePriorityWhereUniqueInput, {
    nullable: true
  })
  connect?: IssuePriorityWhereUniqueInput | undefined;
}
