import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateWithoutAssigneeInput } from "../inputs/IssueCreateWithoutAssigneeInput";
import { IssueUpdateWithoutAssigneeInput } from "../inputs/IssueUpdateWithoutAssigneeInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueUpsertWithWhereUniqueWithoutAssigneeInput", {})
export class IssueUpsertWithWhereUniqueWithoutAssigneeInput {
  @TypeGraphQL.Field(_type => IssueWhereUniqueInput, {
    nullable: false
  })
  where!: IssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => IssueUpdateWithoutAssigneeInput, {
    nullable: false
  })
  update!: IssueUpdateWithoutAssigneeInput;

  @TypeGraphQL.Field(_type => IssueCreateWithoutAssigneeInput, {
    nullable: false
  })
  create!: IssueCreateWithoutAssigneeInput;
}
