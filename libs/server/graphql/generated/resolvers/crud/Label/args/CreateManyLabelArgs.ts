import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LabelCreateManyInput } from "../../../inputs/LabelCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyLabelArgs {
  @TypeGraphQL.Field(_type => [LabelCreateManyInput], {
    nullable: false
  })
  data!: LabelCreateManyInput[];
}
