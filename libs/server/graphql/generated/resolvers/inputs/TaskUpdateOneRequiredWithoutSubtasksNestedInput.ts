import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateOrConnectWithoutSubtasksInput } from "../inputs/TaskCreateOrConnectWithoutSubtasksInput";
import { TaskCreateWithoutSubtasksInput } from "../inputs/TaskCreateWithoutSubtasksInput";
import { TaskUpdateToOneWithWhereWithoutSubtasksInput } from "../inputs/TaskUpdateToOneWithWhereWithoutSubtasksInput";
import { TaskUpsertWithoutSubtasksInput } from "../inputs/TaskUpsertWithoutSubtasksInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType("TaskUpdateOneRequiredWithoutSubtasksNestedInput", {})
export class TaskUpdateOneRequiredWithoutSubtasksNestedInput {
  @TypeGraphQL.Field(_type => TaskCreateWithoutSubtasksInput, {
    nullable: true
  })
  create?: TaskCreateWithoutSubtasksInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateOrConnectWithoutSubtasksInput, {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutSubtasksInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpsertWithoutSubtasksInput, {
    nullable: true
  })
  upsert?: TaskUpsertWithoutSubtasksInput | undefined;

  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: true
  })
  connect?: TaskWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateToOneWithWhereWithoutSubtasksInput, {
    nullable: true
  })
  update?: TaskUpdateToOneWithWhereWithoutSubtasksInput | undefined;
}
