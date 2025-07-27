import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateOrConnectWithoutSubIssuesInput } from "../inputs/IssueCreateOrConnectWithoutSubIssuesInput";
import { IssueCreateWithoutSubIssuesInput } from "../inputs/IssueCreateWithoutSubIssuesInput";
import { IssueUpdateToOneWithWhereWithoutSubIssuesInput } from "../inputs/IssueUpdateToOneWithWhereWithoutSubIssuesInput";
import { IssueUpsertWithoutSubIssuesInput } from "../inputs/IssueUpsertWithoutSubIssuesInput";
import { IssueWhereInput } from "../inputs/IssueWhereInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueUpdateOneWithoutSubIssuesNestedInput", {})
export class IssueUpdateOneWithoutSubIssuesNestedInput {
  @TypeGraphQL.Field(_type => IssueCreateWithoutSubIssuesInput, {
    nullable: true
  })
  create?: IssueCreateWithoutSubIssuesInput | undefined;

  @TypeGraphQL.Field(_type => IssueCreateOrConnectWithoutSubIssuesInput, {
    nullable: true
  })
  connectOrCreate?: IssueCreateOrConnectWithoutSubIssuesInput | undefined;

  @TypeGraphQL.Field(_type => IssueUpsertWithoutSubIssuesInput, {
    nullable: true
  })
  upsert?: IssueUpsertWithoutSubIssuesInput | undefined;

  @TypeGraphQL.Field(_type => IssueWhereInput, {
    nullable: true
  })
  disconnect?: IssueWhereInput | undefined;

  @TypeGraphQL.Field(_type => IssueWhereInput, {
    nullable: true
  })
  delete?: IssueWhereInput | undefined;

  @TypeGraphQL.Field(_type => IssueWhereUniqueInput, {
    nullable: true
  })
  connect?: IssueWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => IssueUpdateToOneWithWhereWithoutSubIssuesInput, {
    nullable: true
  })
  update?: IssueUpdateToOneWithWhereWithoutSubIssuesInput | undefined;
}
