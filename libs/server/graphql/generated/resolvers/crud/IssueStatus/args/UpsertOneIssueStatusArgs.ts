import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssueStatusCreateInput } from "../../../inputs/IssueStatusCreateInput";
import { IssueStatusUpdateInput } from "../../../inputs/IssueStatusUpdateInput";
import { IssueStatusWhereUniqueInput } from "../../../inputs/IssueStatusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneIssueStatusArgs {
  @TypeGraphQL.Field(_type => IssueStatusWhereUniqueInput, {
    nullable: false
  })
  where!: IssueStatusWhereUniqueInput;

  @TypeGraphQL.Field(_type => IssueStatusCreateInput, {
    nullable: false
  })
  create!: IssueStatusCreateInput;

  @TypeGraphQL.Field(_type => IssueStatusUpdateInput, {
    nullable: false
  })
  update!: IssueStatusUpdateInput;
}
