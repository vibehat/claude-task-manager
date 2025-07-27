import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssuePriorityAvgAggregate } from "../outputs/IssuePriorityAvgAggregate";
import { IssuePriorityCountAggregate } from "../outputs/IssuePriorityCountAggregate";
import { IssuePriorityMaxAggregate } from "../outputs/IssuePriorityMaxAggregate";
import { IssuePriorityMinAggregate } from "../outputs/IssuePriorityMinAggregate";
import { IssuePrioritySumAggregate } from "../outputs/IssuePrioritySumAggregate";

@TypeGraphQL.ObjectType("IssuePriorityGroupBy", {})
export class IssuePriorityGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  iconName!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  order!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => IssuePriorityCountAggregate, {
    nullable: true
  })
  _count!: IssuePriorityCountAggregate | null;

  @TypeGraphQL.Field(_type => IssuePriorityAvgAggregate, {
    nullable: true
  })
  _avg!: IssuePriorityAvgAggregate | null;

  @TypeGraphQL.Field(_type => IssuePrioritySumAggregate, {
    nullable: true
  })
  _sum!: IssuePrioritySumAggregate | null;

  @TypeGraphQL.Field(_type => IssuePriorityMinAggregate, {
    nullable: true
  })
  _min!: IssuePriorityMinAggregate | null;

  @TypeGraphQL.Field(_type => IssuePriorityMaxAggregate, {
    nullable: true
  })
  _max!: IssuePriorityMaxAggregate | null;
}
