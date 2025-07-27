import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssuePriorityUpdateWithoutIssuesInput } from "../inputs/IssuePriorityUpdateWithoutIssuesInput";
import { IssuePriorityWhereInput } from "../inputs/IssuePriorityWhereInput";

@TypeGraphQL.InputType("IssuePriorityUpdateToOneWithWhereWithoutIssuesInput", {})
export class IssuePriorityUpdateToOneWithWhereWithoutIssuesInput {
  @TypeGraphQL.Field(_type => IssuePriorityWhereInput, {
    nullable: true
  })
  where?: IssuePriorityWhereInput | undefined;

  @TypeGraphQL.Field(_type => IssuePriorityUpdateWithoutIssuesInput, {
    nullable: false
  })
  data!: IssuePriorityUpdateWithoutIssuesInput;
}
