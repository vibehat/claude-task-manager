import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TeamOrderByWithAggregationInput } from "../../../inputs/TeamOrderByWithAggregationInput";
import { TeamScalarWhereWithAggregatesInput } from "../../../inputs/TeamScalarWhereWithAggregatesInput";
import { TeamWhereInput } from "../../../inputs/TeamWhereInput";
import { TeamScalarFieldEnum } from "../../../../enums/TeamScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTeamArgs {
  @TypeGraphQL.Field(_type => TeamWhereInput, {
    nullable: true
  })
  where?: TeamWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TeamOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TeamOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TeamScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "icon" | "joined" | "color" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => TeamScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TeamScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
