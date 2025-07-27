import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CycleOrderByRelationAggregateInput } from "../inputs/CycleOrderByRelationAggregateInput";
import { TeamMemberOrderByRelationAggregateInput } from "../inputs/TeamMemberOrderByRelationAggregateInput";
import { TeamProjectOrderByRelationAggregateInput } from "../inputs/TeamProjectOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TeamOrderByWithRelationInput", {})
export class TeamOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  icon?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  joined?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  color?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TeamMemberOrderByRelationAggregateInput, {
    nullable: true
  })
  members?: TeamMemberOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TeamProjectOrderByRelationAggregateInput, {
    nullable: true
  })
  projects?: TeamProjectOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CycleOrderByRelationAggregateInput, {
    nullable: true
  })
  cycles?: CycleOrderByRelationAggregateInput | undefined;
}
