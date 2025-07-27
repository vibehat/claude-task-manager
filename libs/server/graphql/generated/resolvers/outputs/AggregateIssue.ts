import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueAvgAggregate } from "../outputs/IssueAvgAggregate";
import { IssueCountAggregate } from "../outputs/IssueCountAggregate";
import { IssueMaxAggregate } from "../outputs/IssueMaxAggregate";
import { IssueMinAggregate } from "../outputs/IssueMinAggregate";
import { IssueSumAggregate } from "../outputs/IssueSumAggregate";

@TypeGraphQL.ObjectType("AggregateIssue", {})
export class AggregateIssue {
  @TypeGraphQL.Field(_type => IssueCountAggregate, {
    nullable: true
  })
  _count!: IssueCountAggregate | null;

  @TypeGraphQL.Field(_type => IssueAvgAggregate, {
    nullable: true
  })
  _avg!: IssueAvgAggregate | null;

  @TypeGraphQL.Field(_type => IssueSumAggregate, {
    nullable: true
  })
  _sum!: IssueSumAggregate | null;

  @TypeGraphQL.Field(_type => IssueMinAggregate, {
    nullable: true
  })
  _min!: IssueMinAggregate | null;

  @TypeGraphQL.Field(_type => IssueMaxAggregate, {
    nullable: true
  })
  _max!: IssueMaxAggregate | null;
}
