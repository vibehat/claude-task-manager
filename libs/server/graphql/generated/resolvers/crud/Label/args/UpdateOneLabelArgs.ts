import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LabelUpdateInput } from "../../../inputs/LabelUpdateInput";
import { LabelWhereUniqueInput } from "../../../inputs/LabelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneLabelArgs {
  @TypeGraphQL.Field(_type => LabelUpdateInput, {
    nullable: false
  })
  data!: LabelUpdateInput;

  @TypeGraphQL.Field(_type => LabelWhereUniqueInput, {
    nullable: false
  })
  where!: LabelWhereUniqueInput;
}
