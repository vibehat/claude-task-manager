import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateOrConnectWithoutDependentsInput } from "../inputs/TaskCreateOrConnectWithoutDependentsInput";
import { TaskCreateWithoutDependentsInput } from "../inputs/TaskCreateWithoutDependentsInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateNestedOneWithoutDependentsInput", {})
export class TaskCreateNestedOneWithoutDependentsInput {
  @TypeGraphQL.Field(_type => TaskCreateWithoutDependentsInput, {
    nullable: true
  })
  create?: TaskCreateWithoutDependentsInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateOrConnectWithoutDependentsInput, {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutDependentsInput | undefined;

  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: true
  })
  connect?: TaskWhereUniqueInput | undefined;
}
