import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubtaskCreateInput } from "../../../inputs/SubtaskCreateInput";
import { SubtaskUpdateInput } from "../../../inputs/SubtaskUpdateInput";
import { SubtaskWhereUniqueInput } from "../../../inputs/SubtaskWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSubtaskArgs {
  @TypeGraphQL.Field(_type => SubtaskWhereUniqueInput, {
    nullable: false
  })
  where!: SubtaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubtaskCreateInput, {
    nullable: false
  })
  create!: SubtaskCreateInput;

  @TypeGraphQL.Field(_type => SubtaskUpdateInput, {
    nullable: false
  })
  update!: SubtaskUpdateInput;
}
