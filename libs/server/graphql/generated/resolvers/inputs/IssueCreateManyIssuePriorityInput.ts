import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("IssueCreateManyIssuePriorityInput", {})
export class IssueCreateManyIssuePriorityInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  identifier!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  statusId?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  priority?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  rank!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cycleId?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  dueDate?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  taskId?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subtaskId?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  issueType!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  parentIssueId?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  assigneeId?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  projectId?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;
}
