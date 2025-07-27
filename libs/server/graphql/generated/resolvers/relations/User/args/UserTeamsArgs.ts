import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TeamMemberOrderByWithRelationInput } from "../../../inputs/TeamMemberOrderByWithRelationInput";
import { TeamMemberWhereInput } from "../../../inputs/TeamMemberWhereInput";
import { TeamMemberWhereUniqueInput } from "../../../inputs/TeamMemberWhereUniqueInput";
import { TeamMemberScalarFieldEnum } from "../../../../enums/TeamMemberScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserTeamsArgs {
  @TypeGraphQL.Field(_type => TeamMemberWhereInput, {
    nullable: true
  })
  where?: TeamMemberWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TeamMemberOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TeamMemberOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TeamMemberWhereUniqueInput, {
    nullable: true
  })
  cursor?: TeamMemberWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TeamMemberScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "teamId" | "userId"> | undefined;
}
