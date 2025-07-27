import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateWithoutIssueStatusInput } from "../inputs/IssueCreateWithoutIssueStatusInput";
import { IssueUpdateWithoutIssueStatusInput } from "../inputs/IssueUpdateWithoutIssueStatusInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueUpsertWithWhereUniqueWithoutIssueStatusInput", {})
export class IssueUpsertWithWhereUniqueWithoutIssueStatusInput {
  @TypeGraphQL.Field(_type => IssueWhereUniqueInput, {
    nullable: false
  })
  where!: IssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => IssueUpdateWithoutIssueStatusInput, {
    nullable: false
  })
  update!: IssueUpdateWithoutIssueStatusInput;

  @TypeGraphQL.Field(_type => IssueCreateWithoutIssueStatusInput, {
    nullable: false
  })
  create!: IssueCreateWithoutIssueStatusInput;
}
