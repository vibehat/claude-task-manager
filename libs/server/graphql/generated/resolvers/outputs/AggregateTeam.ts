import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCountAggregate } from "../outputs/TeamCountAggregate";
import { TeamMaxAggregate } from "../outputs/TeamMaxAggregate";
import { TeamMinAggregate } from "../outputs/TeamMinAggregate";

@TypeGraphQL.ObjectType("AggregateTeam", {})
export class AggregateTeam {
  @TypeGraphQL.Field(_type => TeamCountAggregate, {
    nullable: true
  })
  _count!: TeamCountAggregate | null;

  @TypeGraphQL.Field(_type => TeamMinAggregate, {
    nullable: true
  })
  _min!: TeamMinAggregate | null;

  @TypeGraphQL.Field(_type => TeamMaxAggregate, {
    nullable: true
  })
  _max!: TeamMaxAggregate | null;
}
