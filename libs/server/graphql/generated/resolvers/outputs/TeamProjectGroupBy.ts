import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TeamProjectCountAggregate } from "../outputs/TeamProjectCountAggregate";
import { TeamProjectMaxAggregate } from "../outputs/TeamProjectMaxAggregate";
import { TeamProjectMinAggregate } from "../outputs/TeamProjectMinAggregate";

@TypeGraphQL.ObjectType("TeamProjectGroupBy", {})
export class TeamProjectGroupBy {
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
  projectId!: string;

  @TypeGraphQL.Field(_type => TeamProjectCountAggregate, {
    nullable: true
  })
  _count!: TeamProjectCountAggregate | null;

  @TypeGraphQL.Field(_type => TeamProjectMinAggregate, {
    nullable: true
  })
  _min!: TeamProjectMinAggregate | null;

  @TypeGraphQL.Field(_type => TeamProjectMaxAggregate, {
    nullable: true
  })
  _max!: TeamProjectMaxAggregate | null;
}
