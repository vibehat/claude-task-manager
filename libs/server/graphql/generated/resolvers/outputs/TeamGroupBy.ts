import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamCountAggregate } from "../outputs/TeamCountAggregate";
import { TeamMaxAggregate } from "../outputs/TeamMaxAggregate";
import { TeamMinAggregate } from "../outputs/TeamMinAggregate";

@TypeGraphQL.ObjectType("TeamGroupBy", {})
export class TeamGroupBy {
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
  icon!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  joined!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  color!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

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
