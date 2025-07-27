import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateWithoutParentIssueInput } from "../inputs/IssueCreateWithoutParentIssueInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueCreateOrConnectWithoutParentIssueInput", {})
export class IssueCreateOrConnectWithoutParentIssueInput {
  @TypeGraphQL.Field(_type => IssueWhereUniqueInput, {
    nullable: false
  })
  where!: IssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => IssueCreateWithoutParentIssueInput, {
    nullable: false
  })
  create!: IssueCreateWithoutParentIssueInput;
}
