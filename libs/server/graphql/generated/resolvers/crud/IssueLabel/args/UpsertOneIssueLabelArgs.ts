import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssueLabelCreateInput } from "../../../inputs/IssueLabelCreateInput";
import { IssueLabelUpdateInput } from "../../../inputs/IssueLabelUpdateInput";
import { IssueLabelWhereUniqueInput } from "../../../inputs/IssueLabelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneIssueLabelArgs {
  @TypeGraphQL.Field(_type => IssueLabelWhereUniqueInput, {
    nullable: false
  })
  where!: IssueLabelWhereUniqueInput;

  @TypeGraphQL.Field(_type => IssueLabelCreateInput, {
    nullable: false
  })
  create!: IssueLabelCreateInput;

  @TypeGraphQL.Field(_type => IssueLabelUpdateInput, {
    nullable: false
  })
  update!: IssueLabelUpdateInput;
}
