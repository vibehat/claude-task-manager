import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("IssueMaxAggregate", {})
export class IssueMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  statusId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  priorityId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  status!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  priority!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  rank!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cycleId!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  dueDate!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  taskId!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  subtaskId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  issueType!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  parentIssueId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  assigneeId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  projectId!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;
}
