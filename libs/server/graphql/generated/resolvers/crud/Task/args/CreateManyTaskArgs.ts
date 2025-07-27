import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskCreateManyInput } from "../../../inputs/TaskCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTaskArgs {
  @TypeGraphQL.Field(_type => [TaskCreateManyInput], {
    nullable: false
  })
  data!: TaskCreateManyInput[];
}
