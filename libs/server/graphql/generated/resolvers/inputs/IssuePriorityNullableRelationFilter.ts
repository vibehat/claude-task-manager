import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssuePriorityWhereInput } from "../inputs/IssuePriorityWhereInput";

@TypeGraphQL.InputType("IssuePriorityNullableRelationFilter", {})
export class IssuePriorityNullableRelationFilter {
  @TypeGraphQL.Field(_type => IssuePriorityWhereInput, {
    nullable: true
  })
  is?: IssuePriorityWhereInput | undefined;

  @TypeGraphQL.Field(_type => IssuePriorityWhereInput, {
    nullable: true
  })
  isNot?: IssuePriorityWhereInput | undefined;
}
