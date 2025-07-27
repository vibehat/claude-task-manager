import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CycleAvgAggregate } from "../outputs/CycleAvgAggregate";
import { CycleCountAggregate } from "../outputs/CycleCountAggregate";
import { CycleMaxAggregate } from "../outputs/CycleMaxAggregate";
import { CycleMinAggregate } from "../outputs/CycleMinAggregate";
import { CycleSumAggregate } from "../outputs/CycleSumAggregate";

@TypeGraphQL.ObjectType("AggregateCycle", {})
export class AggregateCycle {
  @TypeGraphQL.Field(_type => CycleCountAggregate, {
    nullable: true
  })
  _count!: CycleCountAggregate | null;

  @TypeGraphQL.Field(_type => CycleAvgAggregate, {
    nullable: true
  })
  _avg!: CycleAvgAggregate | null;

  @TypeGraphQL.Field(_type => CycleSumAggregate, {
    nullable: true
  })
  _sum!: CycleSumAggregate | null;

  @TypeGraphQL.Field(_type => CycleMinAggregate, {
    nullable: true
  })
  _min!: CycleMinAggregate | null;

  @TypeGraphQL.Field(_type => CycleMaxAggregate, {
    nullable: true
  })
  _max!: CycleMaxAggregate | null;
}
