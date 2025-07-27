import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssueLabelUpdateInput } from "../../../inputs/IssueLabelUpdateInput";
import { IssueLabelWhereUniqueInput } from "../../../inputs/IssueLabelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneIssueLabelArgs {
  @TypeGraphQL.Field(_type => IssueLabelUpdateInput, {
    nullable: false
  })
  data!: IssueLabelUpdateInput;

  @TypeGraphQL.Field(_type => IssueLabelWhereUniqueInput, {
    nullable: false
  })
  where!: IssueLabelWhereUniqueInput;
}
