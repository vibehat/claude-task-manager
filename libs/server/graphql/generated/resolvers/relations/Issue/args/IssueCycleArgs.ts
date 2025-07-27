import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CycleWhereInput } from "../../../inputs/CycleWhereInput";

@TypeGraphQL.ArgsType()
export class IssueCycleArgs {
  @TypeGraphQL.Field(_type => CycleWhereInput, {
    nullable: true
  })
  where?: CycleWhereInput | undefined;
}
