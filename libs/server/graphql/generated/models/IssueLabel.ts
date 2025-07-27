import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Issue } from "../models/Issue";
import { Label } from "../models/Label";

@TypeGraphQL.ObjectType("IssueLabel", {})
export class IssueLabel {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  issueId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  labelId!: string;

  issue?: Issue;

  label?: Label;
}
