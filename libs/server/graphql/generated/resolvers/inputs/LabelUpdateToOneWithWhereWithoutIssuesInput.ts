import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LabelUpdateWithoutIssuesInput } from "../inputs/LabelUpdateWithoutIssuesInput";
import { LabelWhereInput } from "../inputs/LabelWhereInput";

@TypeGraphQL.InputType("LabelUpdateToOneWithWhereWithoutIssuesInput", {})
export class LabelUpdateToOneWithWhereWithoutIssuesInput {
  @TypeGraphQL.Field(_type => LabelWhereInput, {
    nullable: true
  })
  where?: LabelWhereInput | undefined;

  @TypeGraphQL.Field(_type => LabelUpdateWithoutIssuesInput, {
    nullable: false
  })
  data!: LabelUpdateWithoutIssuesInput;
}
