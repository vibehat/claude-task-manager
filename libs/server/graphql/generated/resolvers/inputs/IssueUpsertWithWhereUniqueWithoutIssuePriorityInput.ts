import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateWithoutIssuePriorityInput } from "../inputs/IssueCreateWithoutIssuePriorityInput";
import { IssueUpdateWithoutIssuePriorityInput } from "../inputs/IssueUpdateWithoutIssuePriorityInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueUpsertWithWhereUniqueWithoutIssuePriorityInput", {})
export class IssueUpsertWithWhereUniqueWithoutIssuePriorityInput {
  @TypeGraphQL.Field(_type => IssueWhereUniqueInput, {
    nullable: false
  })
  where!: IssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => IssueUpdateWithoutIssuePriorityInput, {
    nullable: false
  })
  update!: IssueUpdateWithoutIssuePriorityInput;

  @TypeGraphQL.Field(_type => IssueCreateWithoutIssuePriorityInput, {
    nullable: false
  })
  create!: IssueCreateWithoutIssuePriorityInput;
}
