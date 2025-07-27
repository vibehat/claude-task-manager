import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueStatusUpdateWithoutIssuesInput } from "../inputs/IssueStatusUpdateWithoutIssuesInput";
import { IssueStatusWhereInput } from "../inputs/IssueStatusWhereInput";

@TypeGraphQL.InputType("IssueStatusUpdateToOneWithWhereWithoutIssuesInput", {})
export class IssueStatusUpdateToOneWithWhereWithoutIssuesInput {
  @TypeGraphQL.Field(_type => IssueStatusWhereInput, {
    nullable: true
  })
  where?: IssueStatusWhereInput | undefined;

  @TypeGraphQL.Field(_type => IssueStatusUpdateWithoutIssuesInput, {
    nullable: false
  })
  data!: IssueStatusUpdateWithoutIssuesInput;
}
