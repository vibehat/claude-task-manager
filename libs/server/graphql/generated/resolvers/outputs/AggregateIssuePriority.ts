import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssuePriorityAvgAggregate } from "../outputs/IssuePriorityAvgAggregate";
import { IssuePriorityCountAggregate } from "../outputs/IssuePriorityCountAggregate";
import { IssuePriorityMaxAggregate } from "../outputs/IssuePriorityMaxAggregate";
import { IssuePriorityMinAggregate } from "../outputs/IssuePriorityMinAggregate";
import { IssuePrioritySumAggregate } from "../outputs/IssuePrioritySumAggregate";

@TypeGraphQL.ObjectType("AggregateIssuePriority", {})
export class AggregateIssuePriority {
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
