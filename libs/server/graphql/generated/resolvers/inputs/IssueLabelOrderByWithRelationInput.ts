import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueOrderByWithRelationInput } from "../inputs/IssueOrderByWithRelationInput";
import { LabelOrderByWithRelationInput } from "../inputs/LabelOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("IssueLabelOrderByWithRelationInput", {})
export class IssueLabelOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  issueId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  labelId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => IssueOrderByWithRelationInput, {
    nullable: true
  })
  issue?: IssueOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => LabelOrderByWithRelationInput, {
    nullable: true
  })
  label?: LabelOrderByWithRelationInput | undefined;
}
