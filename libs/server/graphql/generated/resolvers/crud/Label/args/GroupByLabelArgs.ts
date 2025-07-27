import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LabelOrderByWithAggregationInput } from "../../../inputs/LabelOrderByWithAggregationInput";
import { LabelScalarWhereWithAggregatesInput } from "../../../inputs/LabelScalarWhereWithAggregatesInput";
import { LabelWhereInput } from "../../../inputs/LabelWhereInput";
import { LabelScalarFieldEnum } from "../../../../enums/LabelScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByLabelArgs {
  @TypeGraphQL.Field(_type => LabelWhereInput, {
    nullable: true
  })
  where?: LabelWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LabelOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: LabelOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LabelScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "color" | "description" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => LabelScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: LabelScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
