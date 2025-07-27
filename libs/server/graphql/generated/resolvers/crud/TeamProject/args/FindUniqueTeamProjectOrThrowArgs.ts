import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TeamProjectWhereUniqueInput } from "../../../inputs/TeamProjectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTeamProjectOrThrowArgs {
  @TypeGraphQL.Field(_type => TeamProjectWhereUniqueInput, {
    nullable: false
  })
  where!: TeamProjectWhereUniqueInput;
}
