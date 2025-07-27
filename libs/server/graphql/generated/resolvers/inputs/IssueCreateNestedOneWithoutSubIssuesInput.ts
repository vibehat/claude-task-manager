import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateOrConnectWithoutSubIssuesInput } from "../inputs/IssueCreateOrConnectWithoutSubIssuesInput";
import { IssueCreateWithoutSubIssuesInput } from "../inputs/IssueCreateWithoutSubIssuesInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueCreateNestedOneWithoutSubIssuesInput", {})
export class IssueCreateNestedOneWithoutSubIssuesInput {
  @TypeGraphQL.Field(_type => IssueCreateWithoutSubIssuesInput, {
    nullable: true
  })
  create?: IssueCreateWithoutSubIssuesInput | undefined;

  @TypeGraphQL.Field(_type => IssueCreateOrConnectWithoutSubIssuesInput, {
    nullable: true
  })
  connectOrCreate?: IssueCreateOrConnectWithoutSubIssuesInput | undefined;

  @TypeGraphQL.Field(_type => IssueWhereUniqueInput, {
    nullable: true
  })
  connect?: IssueWhereUniqueInput | undefined;
}
