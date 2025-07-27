import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamMemberCountAggregate } from "../outputs/TeamMemberCountAggregate";
import { TeamMemberMaxAggregate } from "../outputs/TeamMemberMaxAggregate";
import { TeamMemberMinAggregate } from "../outputs/TeamMemberMinAggregate";

@TypeGraphQL.ObjectType("TeamMemberGroupBy", {})
export class TeamMemberGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  teamId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  userId!: string;

  @TypeGraphQL.Field(_type => TeamMemberCountAggregate, {
    nullable: true
  })
  _count!: TeamMemberCountAggregate | null;

  @TypeGraphQL.Field(_type => TeamMemberMinAggregate, {
    nullable: true
  })
  _min!: TeamMemberMinAggregate | null;

  @TypeGraphQL.Field(_type => TeamMemberMaxAggregate, {
    nullable: true
  })
  _max!: TeamMemberMaxAggregate | null;
}
