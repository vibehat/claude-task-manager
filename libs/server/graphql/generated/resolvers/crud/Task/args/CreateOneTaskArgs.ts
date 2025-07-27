import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskCreateInput } from "../../../inputs/TaskCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTaskArgs {
  @TypeGraphQL.Field(_type => TaskCreateInput, {
    nullable: false
  })
  data!: TaskCreateInput;
}
