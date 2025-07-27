import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LabelCountAggregate } from "../outputs/LabelCountAggregate";
import { LabelMaxAggregate } from "../outputs/LabelMaxAggregate";
import { LabelMinAggregate } from "../outputs/LabelMinAggregate";

@TypeGraphQL.ObjectType("AggregateLabel", {})
export class AggregateLabel {
  @TypeGraphQL.Field(_type => LabelCountAggregate, {
    nullable: true
  })
  _count!: LabelCountAggregate | null;

  @TypeGraphQL.Field(_type => LabelMinAggregate, {
    nullable: true
  })
  _min!: LabelMinAggregate | null;

  @TypeGraphQL.Field(_type => LabelMaxAggregate, {
    nullable: true
  })
  _max!: LabelMaxAggregate | null;
}
