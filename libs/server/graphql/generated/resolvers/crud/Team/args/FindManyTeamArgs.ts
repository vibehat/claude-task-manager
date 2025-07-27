import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TeamOrderByWithRelationInput } from "../../../inputs/TeamOrderByWithRelationInput";
import { TeamWhereInput } from "../../../inputs/TeamWhereInput";
import { TeamWhereUniqueInput } from "../../../inputs/TeamWhereUniqueInput";
import { TeamScalarFieldEnum } from "../../../../enums/TeamScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyTeamArgs {
  @TypeGraphQL.Field(_type => TeamWhereInput, {
    nullable: true
  })
  where?: TeamWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TeamOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TeamOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TeamWhereUniqueInput, {
    nullable: true
  })
  cursor?: TeamWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TeamScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "icon" | "joined" | "color" | "createdAt" | "updatedAt"> | undefined;
}
