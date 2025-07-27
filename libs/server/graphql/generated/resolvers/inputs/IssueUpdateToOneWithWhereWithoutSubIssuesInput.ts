import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueUpdateWithoutSubIssuesInput } from "../inputs/IssueUpdateWithoutSubIssuesInput";
import { IssueWhereInput } from "../inputs/IssueWhereInput";

@TypeGraphQL.InputType("IssueUpdateToOneWithWhereWithoutSubIssuesInput", {})
export class IssueUpdateToOneWithWhereWithoutSubIssuesInput {
  @TypeGraphQL.Field(_type => IssueWhereInput, {
    nullable: true
  })
  where?: IssueWhereInput | undefined;

  @TypeGraphQL.Field(_type => IssueUpdateWithoutSubIssuesInput, {
    nullable: false
  })
  data!: IssueUpdateWithoutSubIssuesInput;
}
