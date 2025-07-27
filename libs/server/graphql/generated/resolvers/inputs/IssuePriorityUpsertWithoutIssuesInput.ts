import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssuePriorityCreateWithoutIssuesInput } from "../inputs/IssuePriorityCreateWithoutIssuesInput";
import { IssuePriorityUpdateWithoutIssuesInput } from "../inputs/IssuePriorityUpdateWithoutIssuesInput";
import { IssuePriorityWhereInput } from "../inputs/IssuePriorityWhereInput";

@TypeGraphQL.InputType("IssuePriorityUpsertWithoutIssuesInput", {})
export class IssuePriorityUpsertWithoutIssuesInput {
  @TypeGraphQL.Field(_type => IssuePriorityUpdateWithoutIssuesInput, {
    nullable: false
  })
  update!: IssuePriorityUpdateWithoutIssuesInput;

  @TypeGraphQL.Field(_type => IssuePriorityCreateWithoutIssuesInput, {
    nullable: false
  })
  create!: IssuePriorityCreateWithoutIssuesInput;

  @TypeGraphQL.Field(_type => IssuePriorityWhereInput, {
    nullable: true
  })
  where?: IssuePriorityWhereInput | undefined;
}
