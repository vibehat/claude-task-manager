import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateWithoutLabelsInput } from "../inputs/IssueCreateWithoutLabelsInput";
import { IssueUpdateWithoutLabelsInput } from "../inputs/IssueUpdateWithoutLabelsInput";
import { IssueWhereInput } from "../inputs/IssueWhereInput";

@TypeGraphQL.InputType("IssueUpsertWithoutLabelsInput", {})
export class IssueUpsertWithoutLabelsInput {
  @TypeGraphQL.Field(_type => IssueUpdateWithoutLabelsInput, {
    nullable: false
  })
  update!: IssueUpdateWithoutLabelsInput;

  @TypeGraphQL.Field(_type => IssueCreateWithoutLabelsInput, {
    nullable: false
  })
  create!: IssueCreateWithoutLabelsInput;

  @TypeGraphQL.Field(_type => IssueWhereInput, {
    nullable: true
  })
  where?: IssueWhereInput | undefined;
}
