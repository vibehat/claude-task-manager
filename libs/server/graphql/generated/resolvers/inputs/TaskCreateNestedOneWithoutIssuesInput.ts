import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateOrConnectWithoutIssuesInput } from "../inputs/TaskCreateOrConnectWithoutIssuesInput";
import { TaskCreateWithoutIssuesInput } from "../inputs/TaskCreateWithoutIssuesInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateNestedOneWithoutIssuesInput", {})
export class TaskCreateNestedOneWithoutIssuesInput {
  @TypeGraphQL.Field(_type => TaskCreateWithoutIssuesInput, {
    nullable: true
  })
  create?: TaskCreateWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateOrConnectWithoutIssuesInput, {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: true
  })
  connect?: TaskWhereUniqueInput | undefined;
}
