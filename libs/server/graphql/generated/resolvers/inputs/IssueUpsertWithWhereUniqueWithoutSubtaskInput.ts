import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateWithoutSubtaskInput } from "../inputs/IssueCreateWithoutSubtaskInput";
import { IssueUpdateWithoutSubtaskInput } from "../inputs/IssueUpdateWithoutSubtaskInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueUpsertWithWhereUniqueWithoutSubtaskInput", {})
export class IssueUpsertWithWhereUniqueWithoutSubtaskInput {
  @TypeGraphQL.Field(_type => IssueWhereUniqueInput, {
    nullable: false
  })
  where!: IssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => IssueUpdateWithoutSubtaskInput, {
    nullable: false
  })
  update!: IssueUpdateWithoutSubtaskInput;

  @TypeGraphQL.Field(_type => IssueCreateWithoutSubtaskInput, {
    nullable: false
  })
  create!: IssueCreateWithoutSubtaskInput;
}
