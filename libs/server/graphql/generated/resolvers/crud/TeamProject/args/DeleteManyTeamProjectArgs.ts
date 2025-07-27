import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TeamProjectWhereInput } from "../../../inputs/TeamProjectWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTeamProjectArgs {
  @TypeGraphQL.Field(_type => TeamProjectWhereInput, {
    nullable: true
  })
  where?: TeamProjectWhereInput | undefined;
}
