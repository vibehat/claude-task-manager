import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueUpdateWithoutIssuePriorityInput } from "../inputs/IssueUpdateWithoutIssuePriorityInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueUpdateWithWhereUniqueWithoutIssuePriorityInput", {})
export class IssueUpdateWithWhereUniqueWithoutIssuePriorityInput {
  @TypeGraphQL.Field(_type => IssueWhereUniqueInput, {
    nullable: false
  })
  where!: IssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => IssueUpdateWithoutIssuePriorityInput, {
    nullable: false
  })
  data!: IssueUpdateWithoutIssuePriorityInput;
}
