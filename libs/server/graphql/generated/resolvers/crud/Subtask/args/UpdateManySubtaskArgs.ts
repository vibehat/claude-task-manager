import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubtaskUpdateManyMutationInput } from "../../../inputs/SubtaskUpdateManyMutationInput";
import { SubtaskWhereInput } from "../../../inputs/SubtaskWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySubtaskArgs {
  @TypeGraphQL.Field(_type => SubtaskUpdateManyMutationInput, {
    nullable: false
  })
  data!: SubtaskUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SubtaskWhereInput, {
    nullable: true
  })
  where?: SubtaskWhereInput | undefined;
}
