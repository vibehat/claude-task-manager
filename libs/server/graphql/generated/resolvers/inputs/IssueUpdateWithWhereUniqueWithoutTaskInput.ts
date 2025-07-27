import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueUpdateWithoutTaskInput } from "../inputs/IssueUpdateWithoutTaskInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueUpdateWithWhereUniqueWithoutTaskInput", {})
export class IssueUpdateWithWhereUniqueWithoutTaskInput {
  @TypeGraphQL.Field(_type => IssueWhereUniqueInput, {
    nullable: false
  })
  where!: IssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => IssueUpdateWithoutTaskInput, {
    nullable: false
  })
  data!: IssueUpdateWithoutTaskInput;
}
