import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CycleCreateInput } from "../../../inputs/CycleCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCycleArgs {
  @TypeGraphQL.Field(_type => CycleCreateInput, {
    nullable: false
  })
  data!: CycleCreateInput;
}
