import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubtaskUpdateInput } from "../../../inputs/SubtaskUpdateInput";
import { SubtaskWhereUniqueInput } from "../../../inputs/SubtaskWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSubtaskArgs {
  @TypeGraphQL.Field(_type => SubtaskUpdateInput, {
    nullable: false
  })
  data!: SubtaskUpdateInput;

  @TypeGraphQL.Field(_type => SubtaskWhereUniqueInput, {
    nullable: false
  })
  where!: SubtaskWhereUniqueInput;
}
