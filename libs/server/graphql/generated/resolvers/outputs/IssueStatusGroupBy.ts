import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueStatusCountAggregate } from "../outputs/IssueStatusCountAggregate";
import { IssueStatusMaxAggregate } from "../outputs/IssueStatusMaxAggregate";
import { IssueStatusMinAggregate } from "../outputs/IssueStatusMinAggregate";

@TypeGraphQL.ObjectType("IssueStatusGroupBy", {})
export class IssueStatusGroupBy {
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
    nullable: false
  })
  iconName!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => IssueStatusCountAggregate, {
    nullable: true
  })
  _count!: IssueStatusCountAggregate | null;

  @TypeGraphQL.Field(_type => IssueStatusMinAggregate, {
    nullable: true
  })
  _min!: IssueStatusMinAggregate | null;

  @TypeGraphQL.Field(_type => IssueStatusMaxAggregate, {
    nullable: true
  })
  _max!: IssueStatusMaxAggregate | null;
}
