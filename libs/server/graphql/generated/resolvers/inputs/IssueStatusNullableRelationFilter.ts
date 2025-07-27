import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueStatusWhereInput } from "../inputs/IssueStatusWhereInput";

@TypeGraphQL.InputType("IssueStatusNullableRelationFilter", {})
export class IssueStatusNullableRelationFilter {
  @TypeGraphQL.Field(_type => IssueStatusWhereInput, {
    nullable: true
  })
  is?: IssueStatusWhereInput | undefined;

  @TypeGraphQL.Field(_type => IssueStatusWhereInput, {
    nullable: true
  })
  isNot?: IssueStatusWhereInput | undefined;
}
