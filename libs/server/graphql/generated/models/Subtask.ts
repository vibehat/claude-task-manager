import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Issue } from "../models/Issue";
import { Task } from "../models/Task";
import { SubtaskCount } from "../resolvers/outputs/SubtaskCount";

@TypeGraphQL.ObjectType("Subtask", {})
export class Subtask {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

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
  details?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  testStrategy?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  status!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  parentId!: number;

  parentTask?: Task;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dependencies!: string;

  issues?: Issue[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => SubtaskCount, {
    nullable: true
  })
  _count?: SubtaskCount | null;
}
