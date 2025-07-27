import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueWhereInput } from "../inputs/IssueWhereInput";

@TypeGraphQL.InputType("IssueNullableRelationFilter", {})
export class IssueNullableRelationFilter {
  @TypeGraphQL.Field(_type => IssueWhereInput, {
    nullable: true
  })
  is?: IssueWhereInput | undefined;

  @TypeGraphQL.Field(_type => IssueWhereInput, {
    nullable: true
  })
  isNot?: IssueWhereInput | undefined;
}
