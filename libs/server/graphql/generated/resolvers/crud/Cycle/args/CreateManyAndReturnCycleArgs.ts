import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CycleCreateManyInput } from "../../../inputs/CycleCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnCycleArgs {
  @TypeGraphQL.Field(_type => [CycleCreateManyInput], {
    nullable: false
  })
  data!: CycleCreateManyInput[];
}
