import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LabelCountAggregate } from "../outputs/LabelCountAggregate";
import { LabelMaxAggregate } from "../outputs/LabelMaxAggregate";
import { LabelMinAggregate } from "../outputs/LabelMinAggregate";

@TypeGraphQL.ObjectType("LabelGroupBy", {})
export class LabelGroupBy {
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
  color!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

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
