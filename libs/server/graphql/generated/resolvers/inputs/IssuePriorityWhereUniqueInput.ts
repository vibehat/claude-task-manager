import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IssueListRelationFilter } from "../inputs/IssueListRelationFilter";
import { IssuePriorityWhereInput } from "../inputs/IssuePriorityWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("IssuePriorityWhereUniqueInput", {})
export class IssuePriorityWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => [IssuePriorityWhereInput], {
    nullable: true
  })
  AND?: IssuePriorityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssuePriorityWhereInput], {
    nullable: true
  })
  OR?: IssuePriorityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssuePriorityWhereInput], {
    nullable: true
  })
  NOT?: IssuePriorityWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  iconName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  order?: IntFilter | undefined;

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
