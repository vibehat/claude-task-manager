import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CycleCreateInput } from "../../../inputs/CycleCreateInput";
import { CycleUpdateInput } from "../../../inputs/CycleUpdateInput";
import { CycleWhereUniqueInput } from "../../../inputs/CycleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCycleArgs {
  @TypeGraphQL.Field(_type => CycleWhereUniqueInput, {
    nullable: false
  })
  where!: CycleWhereUniqueInput;

  @TypeGraphQL.Field(_type => CycleCreateInput, {
    nullable: false
  })
  create!: CycleCreateInput;

  @TypeGraphQL.Field(_type => CycleUpdateInput, {
    nullable: false
  })
  update!: CycleUpdateInput;
}
