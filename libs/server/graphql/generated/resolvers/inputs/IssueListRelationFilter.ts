import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueWhereInput } from "../inputs/IssueWhereInput";

@TypeGraphQL.InputType("IssueListRelationFilter", {})
export class IssueListRelationFilter {
  @TypeGraphQL.Field(_type => IssueWhereInput, {
    nullable: true
  })
  every?: IssueWhereInput | undefined;

  @TypeGraphQL.Field(_type => IssueWhereInput, {
    nullable: true
  })
  some?: IssueWhereInput | undefined;

  @TypeGraphQL.Field(_type => IssueWhereInput, {
    nullable: true
  })
  none?: IssueWhereInput | undefined;
}
