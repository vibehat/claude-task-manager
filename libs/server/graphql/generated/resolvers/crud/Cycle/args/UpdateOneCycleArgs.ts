import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CycleUpdateInput } from "../../../inputs/CycleUpdateInput";
import { CycleWhereUniqueInput } from "../../../inputs/CycleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCycleArgs {
  @TypeGraphQL.Field(_type => CycleUpdateInput, {
    nullable: false
  })
  data!: CycleUpdateInput;

  @TypeGraphQL.Field(_type => CycleWhereUniqueInput, {
    nullable: false
  })
  where!: CycleWhereUniqueInput;
}
