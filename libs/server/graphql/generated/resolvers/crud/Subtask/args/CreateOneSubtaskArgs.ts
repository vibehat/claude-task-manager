import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubtaskCreateInput } from "../../../inputs/SubtaskCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSubtaskArgs {
  @TypeGraphQL.Field(_type => SubtaskCreateInput, {
    nullable: false
  })
  data!: SubtaskCreateInput;
}
