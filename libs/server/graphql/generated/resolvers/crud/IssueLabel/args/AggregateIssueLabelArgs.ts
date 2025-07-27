import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssueLabelOrderByWithRelationInput } from "../../../inputs/IssueLabelOrderByWithRelationInput";
import { IssueLabelWhereInput } from "../../../inputs/IssueLabelWhereInput";
import { IssueLabelWhereUniqueInput } from "../../../inputs/IssueLabelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateIssueLabelArgs {
  @TypeGraphQL.Field(_type => IssueLabelWhereInput, {
    nullable: true
  })
  where?: IssueLabelWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IssueLabelOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: IssueLabelOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => IssueLabelWhereUniqueInput, {
    nullable: true
  })
  cursor?: IssueLabelWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
