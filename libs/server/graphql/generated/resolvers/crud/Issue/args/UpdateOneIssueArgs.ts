import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssueUpdateInput } from "../../../inputs/IssueUpdateInput";
import { IssueWhereUniqueInput } from "../../../inputs/IssueWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneIssueArgs {
  @TypeGraphQL.Field(_type => IssueUpdateInput, {
    nullable: false
  })
  data!: IssueUpdateInput;

  @TypeGraphQL.Field(_type => IssueWhereUniqueInput, {
    nullable: false
  })
  where!: IssueWhereUniqueInput;
}
