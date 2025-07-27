import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LabelCreateInput } from "../../../inputs/LabelCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneLabelArgs {
  @TypeGraphQL.Field(_type => LabelCreateInput, {
    nullable: false
  })
  data!: LabelCreateInput;
}
