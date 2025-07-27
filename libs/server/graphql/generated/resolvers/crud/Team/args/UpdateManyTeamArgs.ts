import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TeamUpdateManyMutationInput } from "../../../inputs/TeamUpdateManyMutationInput";
import { TeamWhereInput } from "../../../inputs/TeamWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTeamArgs {
  @TypeGraphQL.Field(_type => TeamUpdateManyMutationInput, {
    nullable: false
  })
  data!: TeamUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TeamWhereInput, {
    nullable: true
  })
  where?: TeamWhereInput | undefined;
}
