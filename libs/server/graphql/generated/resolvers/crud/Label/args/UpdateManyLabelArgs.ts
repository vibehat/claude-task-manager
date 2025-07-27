import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LabelUpdateManyMutationInput } from "../../../inputs/LabelUpdateManyMutationInput";
import { LabelWhereInput } from "../../../inputs/LabelWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyLabelArgs {
  @TypeGraphQL.Field(_type => LabelUpdateManyMutationInput, {
    nullable: false
  })
  data!: LabelUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => LabelWhereInput, {
    nullable: true
  })
  where?: LabelWhereInput | undefined;
}
