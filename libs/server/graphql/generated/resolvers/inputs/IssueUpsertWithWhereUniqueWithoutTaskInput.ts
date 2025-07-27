import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateWithoutTaskInput } from "../inputs/IssueCreateWithoutTaskInput";
import { IssueUpdateWithoutTaskInput } from "../inputs/IssueUpdateWithoutTaskInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueUpsertWithWhereUniqueWithoutTaskInput", {})
export class IssueUpsertWithWhereUniqueWithoutTaskInput {
  @TypeGraphQL.Field(_type => IssueWhereUniqueInput, {
    nullable: false
  })
  where!: IssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => IssueUpdateWithoutTaskInput, {
    nullable: false
  })
  update!: IssueUpdateWithoutTaskInput;

  @TypeGraphQL.Field(_type => IssueCreateWithoutTaskInput, {
    nullable: false
  })
  create!: IssueCreateWithoutTaskInput;
}
