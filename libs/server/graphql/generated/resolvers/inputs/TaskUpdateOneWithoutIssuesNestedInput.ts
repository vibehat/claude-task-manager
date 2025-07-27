import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateOrConnectWithoutIssuesInput } from "../inputs/TaskCreateOrConnectWithoutIssuesInput";
import { TaskCreateWithoutIssuesInput } from "../inputs/TaskCreateWithoutIssuesInput";
import { TaskUpdateToOneWithWhereWithoutIssuesInput } from "../inputs/TaskUpdateToOneWithWhereWithoutIssuesInput";
import { TaskUpsertWithoutIssuesInput } from "../inputs/TaskUpsertWithoutIssuesInput";
import { TaskWhereInput } from "../inputs/TaskWhereInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateOneWithoutIssuesNestedInput", {})
export class TaskUpdateOneWithoutIssuesNestedInput {
  @TypeGraphQL.Field(_type => TaskCreateWithoutIssuesInput, {
    nullable: true
  })
  create?: TaskCreateWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateOrConnectWithoutIssuesInput, {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpsertWithoutIssuesInput, {
    nullable: true
  })
  upsert?: TaskUpsertWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => TaskWhereInput, {
    nullable: true
  })
  disconnect?: TaskWhereInput | undefined;

  @TypeGraphQL.Field(_type => TaskWhereInput, {
    nullable: true
  })
  delete?: TaskWhereInput | undefined;

  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: true
  })
  connect?: TaskWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateToOneWithWhereWithoutIssuesInput, {
    nullable: true
  })
  update?: TaskUpdateToOneWithWhereWithoutIssuesInput | undefined;
}
