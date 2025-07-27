import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LabelCreateWithoutIssuesInput } from "../inputs/LabelCreateWithoutIssuesInput";
import { LabelUpdateWithoutIssuesInput } from "../inputs/LabelUpdateWithoutIssuesInput";
import { LabelWhereInput } from "../inputs/LabelWhereInput";

@TypeGraphQL.InputType("LabelUpsertWithoutIssuesInput", {})
export class LabelUpsertWithoutIssuesInput {
  @TypeGraphQL.Field(_type => LabelUpdateWithoutIssuesInput, {
    nullable: false
  })
  update!: LabelUpdateWithoutIssuesInput;

  @TypeGraphQL.Field(_type => LabelCreateWithoutIssuesInput, {
    nullable: false
  })
  create!: LabelCreateWithoutIssuesInput;

  @TypeGraphQL.Field(_type => LabelWhereInput, {
    nullable: true
  })
  where?: LabelWhereInput | undefined;
}
