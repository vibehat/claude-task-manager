import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LabelCreateWithoutIssuesInput } from "../inputs/LabelCreateWithoutIssuesInput";
import { LabelWhereUniqueInput } from "../inputs/LabelWhereUniqueInput";

@TypeGraphQL.InputType("LabelCreateOrConnectWithoutIssuesInput", {})
export class LabelCreateOrConnectWithoutIssuesInput {
  @TypeGraphQL.Field(_type => LabelWhereUniqueInput, {
    nullable: false
  })
  where!: LabelWhereUniqueInput;

  @TypeGraphQL.Field(_type => LabelCreateWithoutIssuesInput, {
    nullable: false
  })
  create!: LabelCreateWithoutIssuesInput;
}
