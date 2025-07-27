import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateWithoutSubIssuesInput } from "../inputs/IssueCreateWithoutSubIssuesInput";
import { IssueUpdateWithoutSubIssuesInput } from "../inputs/IssueUpdateWithoutSubIssuesInput";
import { IssueWhereInput } from "../inputs/IssueWhereInput";

@TypeGraphQL.InputType("IssueUpsertWithoutSubIssuesInput", {})
export class IssueUpsertWithoutSubIssuesInput {
  @TypeGraphQL.Field(_type => IssueUpdateWithoutSubIssuesInput, {
    nullable: false
  })
  update!: IssueUpdateWithoutSubIssuesInput;

  @TypeGraphQL.Field(_type => IssueCreateWithoutSubIssuesInput, {
    nullable: false
  })
  create!: IssueCreateWithoutSubIssuesInput;

  @TypeGraphQL.Field(_type => IssueWhereInput, {
    nullable: true
  })
  where?: IssueWhereInput | undefined;
}
