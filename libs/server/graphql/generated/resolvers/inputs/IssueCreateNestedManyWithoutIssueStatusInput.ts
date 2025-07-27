import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateManyIssueStatusInputEnvelope } from "../inputs/IssueCreateManyIssueStatusInputEnvelope";
import { IssueCreateOrConnectWithoutIssueStatusInput } from "../inputs/IssueCreateOrConnectWithoutIssueStatusInput";
import { IssueCreateWithoutIssueStatusInput } from "../inputs/IssueCreateWithoutIssueStatusInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueCreateNestedManyWithoutIssueStatusInput", {})
export class IssueCreateNestedManyWithoutIssueStatusInput {
  @TypeGraphQL.Field(_type => [IssueCreateWithoutIssueStatusInput], {
    nullable: true
  })
  create?: IssueCreateWithoutIssueStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueCreateOrConnectWithoutIssueStatusInput], {
    nullable: true
  })
  connectOrCreate?: IssueCreateOrConnectWithoutIssueStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => IssueCreateManyIssueStatusInputEnvelope, {
    nullable: true
  })
  createMany?: IssueCreateManyIssueStatusInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [IssueWhereUniqueInput], {
    nullable: true
  })
  connect?: IssueWhereUniqueInput[] | undefined;
}
