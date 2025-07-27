import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CycleOrderByWithRelationInput } from "../../../inputs/CycleOrderByWithRelationInput";
import { CycleWhereInput } from "../../../inputs/CycleWhereInput";
import { CycleWhereUniqueInput } from "../../../inputs/CycleWhereUniqueInput";
import { CycleScalarFieldEnum } from "../../../../enums/CycleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstCycleArgs {
  @TypeGraphQL.Field(_type => CycleWhereInput, {
    nullable: true
  })
  where?: CycleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CycleOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CycleOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CycleWhereUniqueInput, {
    nullable: true
  })
  cursor?: CycleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CycleScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "number" | "name" | "teamId" | "startDate" | "endDate" | "progress" | "createdAt" | "updatedAt"> | undefined;
}
