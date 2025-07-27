import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssueLabelUpdateManyMutationInput } from "../../../inputs/IssueLabelUpdateManyMutationInput";
import { IssueLabelWhereInput } from "../../../inputs/IssueLabelWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyIssueLabelArgs {
  @TypeGraphQL.Field(_type => IssueLabelUpdateManyMutationInput, {
    nullable: false
  })
  data!: IssueLabelUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => IssueLabelWhereInput, {
    nullable: true
  })
  where?: IssueLabelWhereInput | undefined;
}
