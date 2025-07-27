import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IssueListRelationFilter } from "../inputs/IssueListRelationFilter";
import { IssueStatusWhereInput } from "../inputs/IssueStatusWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("IssueStatusWhereUniqueInput", {})
export class IssueStatusWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => [IssueStatusWhereInput], {
    nullable: true
  })
  AND?: IssueStatusWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueStatusWhereInput], {
    nullable: true
  })
  OR?: IssueStatusWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueStatusWhereInput], {
    nullable: true
  })
  NOT?: IssueStatusWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  color?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  iconName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => IssueListRelationFilter, {
    nullable: true
  })
  issues?: IssueListRelationFilter | undefined;
}
