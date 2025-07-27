import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LabelCreateInput } from "../../../inputs/LabelCreateInput";
import { LabelUpdateInput } from "../../../inputs/LabelUpdateInput";
import { LabelWhereUniqueInput } from "../../../inputs/LabelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneLabelArgs {
  @TypeGraphQL.Field(_type => LabelWhereUniqueInput, {
    nullable: false
  })
  where!: LabelWhereUniqueInput;

  @TypeGraphQL.Field(_type => LabelCreateInput, {
    nullable: false
  })
  create!: LabelCreateInput;

  @TypeGraphQL.Field(_type => LabelUpdateInput, {
    nullable: false
  })
  update!: LabelUpdateInput;
}
