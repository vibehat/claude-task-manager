import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubtaskCreateManyInput } from "../../../inputs/SubtaskCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySubtaskArgs {
  @TypeGraphQL.Field(_type => [SubtaskCreateManyInput], {
    nullable: false
  })
  data!: SubtaskCreateManyInput[];
}
