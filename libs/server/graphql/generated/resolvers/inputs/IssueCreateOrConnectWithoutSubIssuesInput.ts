import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateWithoutSubIssuesInput } from "../inputs/IssueCreateWithoutSubIssuesInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueCreateOrConnectWithoutSubIssuesInput", {})
export class IssueCreateOrConnectWithoutSubIssuesInput {
  @TypeGraphQL.Field(_type => IssueWhereUniqueInput, {
    nullable: false
  })
  where!: IssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => IssueCreateWithoutSubIssuesInput, {
    nullable: false
  })
  create!: IssueCreateWithoutSubIssuesInput;
}
