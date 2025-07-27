import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateWithoutIssueStatusInput } from "../inputs/IssueCreateWithoutIssueStatusInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueCreateOrConnectWithoutIssueStatusInput", {})
export class IssueCreateOrConnectWithoutIssueStatusInput {
  @TypeGraphQL.Field(_type => IssueWhereUniqueInput, {
    nullable: false
  })
  where!: IssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => IssueCreateWithoutIssueStatusInput, {
    nullable: false
  })
  create!: IssueCreateWithoutIssueStatusInput;
}
