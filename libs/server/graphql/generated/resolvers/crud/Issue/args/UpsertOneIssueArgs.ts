import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssueCreateInput } from "../../../inputs/IssueCreateInput";
import { IssueUpdateInput } from "../../../inputs/IssueUpdateInput";
import { IssueWhereUniqueInput } from "../../../inputs/IssueWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneIssueArgs {
  @TypeGraphQL.Field(_type => IssueWhereUniqueInput, {
    nullable: false
  })
  where!: IssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => IssueCreateInput, {
    nullable: false
  })
  create!: IssueCreateInput;

  @TypeGraphQL.Field(_type => IssueUpdateInput, {
    nullable: false
  })
  update!: IssueUpdateInput;
}
