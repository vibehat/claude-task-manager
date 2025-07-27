import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateWithoutProjectInput } from "../inputs/IssueCreateWithoutProjectInput";
import { IssueUpdateWithoutProjectInput } from "../inputs/IssueUpdateWithoutProjectInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueUpsertWithWhereUniqueWithoutProjectInput", {})
export class IssueUpsertWithWhereUniqueWithoutProjectInput {
  @TypeGraphQL.Field(_type => IssueWhereUniqueInput, {
    nullable: false
  })
  where!: IssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => IssueUpdateWithoutProjectInput, {
    nullable: false
  })
  update!: IssueUpdateWithoutProjectInput;

  @TypeGraphQL.Field(_type => IssueCreateWithoutProjectInput, {
    nullable: false
  })
  create!: IssueCreateWithoutProjectInput;
}
