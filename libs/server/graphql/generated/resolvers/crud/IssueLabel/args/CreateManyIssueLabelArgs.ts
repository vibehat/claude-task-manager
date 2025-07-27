import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssueLabelCreateManyInput } from "../../../inputs/IssueLabelCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyIssueLabelArgs {
  @TypeGraphQL.Field(_type => [IssueLabelCreateManyInput], {
    nullable: false
  })
  data!: IssueLabelCreateManyInput[];
}
