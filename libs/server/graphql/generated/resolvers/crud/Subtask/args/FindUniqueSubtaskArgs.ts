import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubtaskWhereUniqueInput } from "../../../inputs/SubtaskWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSubtaskArgs {
  @TypeGraphQL.Field(_type => SubtaskWhereUniqueInput, {
    nullable: false
  })
  where!: SubtaskWhereUniqueInput;
}
