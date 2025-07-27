import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssueLabelCreateInput } from "../../../inputs/IssueLabelCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneIssueLabelArgs {
  @TypeGraphQL.Field(_type => IssueLabelCreateInput, {
    nullable: false
  })
  data!: IssueLabelCreateInput;
}
