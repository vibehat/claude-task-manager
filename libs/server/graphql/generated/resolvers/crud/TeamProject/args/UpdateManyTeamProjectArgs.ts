import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TeamProjectUpdateManyMutationInput } from "../../../inputs/TeamProjectUpdateManyMutationInput";
import { TeamProjectWhereInput } from "../../../inputs/TeamProjectWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTeamProjectArgs {
  @TypeGraphQL.Field(_type => TeamProjectUpdateManyMutationInput, {
    nullable: false
  })
  data!: TeamProjectUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TeamProjectWhereInput, {
    nullable: true
  })
  where?: TeamProjectWhereInput | undefined;
}
