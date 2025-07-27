import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateOrConnectWithoutSubtasksInput } from "../inputs/TaskCreateOrConnectWithoutSubtasksInput";
import { TaskCreateWithoutSubtasksInput } from "../inputs/TaskCreateWithoutSubtasksInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskCreateNestedOneWithoutSubtasksInput", {})
export class TaskCreateNestedOneWithoutSubtasksInput {
  @TypeGraphQL.Field(_type => TaskCreateWithoutSubtasksInput, {
    nullable: true
  })
  create?: TaskCreateWithoutSubtasksInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateOrConnectWithoutSubtasksInput, {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutSubtasksInput | undefined;

  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: true
  })
  connect?: TaskWhereUniqueInput | undefined;
}
