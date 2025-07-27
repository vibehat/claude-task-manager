import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssueWhereInput } from "../../inputs/IssueWhereInput";

@TypeGraphQL.ArgsType()
export class IssueCountSubIssuesArgs {
  @TypeGraphQL.Field(_type => IssueWhereInput, {
    nullable: true
  })
  where?: IssueWhereInput | undefined;
}
