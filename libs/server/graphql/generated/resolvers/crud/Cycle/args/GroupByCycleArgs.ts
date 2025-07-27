import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CycleOrderByWithAggregationInput } from "../../../inputs/CycleOrderByWithAggregationInput";
import { CycleScalarWhereWithAggregatesInput } from "../../../inputs/CycleScalarWhereWithAggregatesInput";
import { CycleWhereInput } from "../../../inputs/CycleWhereInput";
import { CycleScalarFieldEnum } from "../../../../enums/CycleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCycleArgs {
  @TypeGraphQL.Field(_type => CycleWhereInput, {
    nullable: true
  })
  where?: CycleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CycleOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CycleOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CycleScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "number" | "name" | "teamId" | "startDate" | "endDate" | "progress" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => CycleScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CycleScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
