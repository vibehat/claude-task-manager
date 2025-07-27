import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueLabelCountAggregate } from "../outputs/IssueLabelCountAggregate";
import { IssueLabelMaxAggregate } from "../outputs/IssueLabelMaxAggregate";
import { IssueLabelMinAggregate } from "../outputs/IssueLabelMinAggregate";

@TypeGraphQL.ObjectType("AggregateIssueLabel", {})
export class AggregateIssueLabel {
  @TypeGraphQL.Field(_type => IssueLabelCountAggregate, {
    nullable: true
  })
  _count!: IssueLabelCountAggregate | null;

  @TypeGraphQL.Field(_type => IssueLabelMinAggregate, {
    nullable: true
  })
  _min!: IssueLabelMinAggregate | null;

  @TypeGraphQL.Field(_type => IssueLabelMaxAggregate, {
    nullable: true
  })
  _max!: IssueLabelMaxAggregate | null;
}
