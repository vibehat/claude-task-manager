import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CycleWhereInput } from "../../inputs/CycleWhereInput";

@TypeGraphQL.ArgsType()
export class TeamCountCyclesArgs {
  @TypeGraphQL.Field(_type => CycleWhereInput, {
    nullable: true
  })
  where?: CycleWhereInput | undefined;
}
