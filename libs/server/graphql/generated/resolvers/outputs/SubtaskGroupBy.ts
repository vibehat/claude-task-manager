import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubtaskAvgAggregate } from "../outputs/SubtaskAvgAggregate";
import { SubtaskCountAggregate } from "../outputs/SubtaskCountAggregate";
import { SubtaskMaxAggregate } from "../outputs/SubtaskMaxAggregate";
import { SubtaskMinAggregate } from "../outputs/SubtaskMinAggregate";
import { SubtaskSumAggregate } from "../outputs/SubtaskSumAggregate";

@TypeGraphQL.ObjectType("SubtaskGroupBy", {})
export class SubtaskGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  details!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  testStrategy!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  status!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  parentId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  dependencies!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

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
