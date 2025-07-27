import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateWithoutCycleInput } from "../inputs/IssueCreateWithoutCycleInput";
import { IssueUpdateWithoutCycleInput } from "../inputs/IssueUpdateWithoutCycleInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueUpsertWithWhereUniqueWithoutCycleInput", {})
export class IssueUpsertWithWhereUniqueWithoutCycleInput {
  @TypeGraphQL.Field(_type => IssueWhereUniqueInput, {
    nullable: false
  })
  where!: IssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => IssueUpdateWithoutCycleInput, {
    nullable: false
  })
  update!: IssueUpdateWithoutCycleInput;

  @TypeGraphQL.Field(_type => IssueCreateWithoutCycleInput, {
    nullable: false
  })
  create!: IssueCreateWithoutCycleInput;
}
