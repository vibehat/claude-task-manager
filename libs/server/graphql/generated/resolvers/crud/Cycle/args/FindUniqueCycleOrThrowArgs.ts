import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CycleWhereUniqueInput } from "../../../inputs/CycleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCycleOrThrowArgs {
  @TypeGraphQL.Field(_type => CycleWhereUniqueInput, {
    nullable: false
  })
  where!: CycleWhereUniqueInput;
}
