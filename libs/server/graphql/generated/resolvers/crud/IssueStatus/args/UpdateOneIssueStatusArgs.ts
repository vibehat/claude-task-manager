import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssueStatusUpdateInput } from "../../../inputs/IssueStatusUpdateInput";
import { IssueStatusWhereUniqueInput } from "../../../inputs/IssueStatusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneIssueStatusArgs {
  @TypeGraphQL.Field(_type => IssueStatusUpdateInput, {
    nullable: false
  })
  data!: IssueStatusUpdateInput;

  @TypeGraphQL.Field(_type => IssueStatusWhereUniqueInput, {
    nullable: false
  })
  where!: IssueStatusWhereUniqueInput;
}
