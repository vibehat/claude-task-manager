import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubtaskCreateManyParentTaskInput } from "../inputs/SubtaskCreateManyParentTaskInput";

@TypeGraphQL.InputType("SubtaskCreateManyParentTaskInputEnvelope", {})
export class SubtaskCreateManyParentTaskInputEnvelope {
  @TypeGraphQL.Field(_type => [SubtaskCreateManyParentTaskInput], {
    nullable: false
  })
  data!: SubtaskCreateManyParentTaskInput[];
}
