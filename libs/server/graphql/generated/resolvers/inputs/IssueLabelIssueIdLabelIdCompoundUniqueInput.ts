import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("IssueLabelIssueIdLabelIdCompoundUniqueInput", {})
export class IssueLabelIssueIdLabelIdCompoundUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  issueId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  labelId!: string;
}
