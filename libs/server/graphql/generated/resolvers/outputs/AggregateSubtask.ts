import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubtaskAvgAggregate } from "../outputs/SubtaskAvgAggregate";
import { SubtaskCountAggregate } from "../outputs/SubtaskCountAggregate";
import { SubtaskMaxAggregate } from "../outputs/SubtaskMaxAggregate";
import { SubtaskMinAggregate } from "../outputs/SubtaskMinAggregate";
import { SubtaskSumAggregate } from "../outputs/SubtaskSumAggregate";

@TypeGraphQL.ObjectType("AggregateSubtask", {})
export class AggregateSubtask {
  @TypeGraphQL.Field(_type => SubtaskCountAggregate, {
    nullable: true
  })
  _count!: SubtaskCountAggregate | null;

  @TypeGraphQL.Field(_type => SubtaskAvgAggregate, {
    nullable: true
  })
  _avg!: SubtaskAvgAggregate | null;

  @TypeGraphQL.Field(_type => SubtaskSumAggregate, {
    nullable: true
  })
  _sum!: SubtaskSumAggregate | null;

  @TypeGraphQL.Field(_type => SubtaskMinAggregate, {
    nullable: true
  })
  _min!: SubtaskMinAggregate | null;

  @TypeGraphQL.Field(_type => SubtaskMaxAggregate, {
    nullable: true
  })
  _max!: SubtaskMaxAggregate | null;
}
