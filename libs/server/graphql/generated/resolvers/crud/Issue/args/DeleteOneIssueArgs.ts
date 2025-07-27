import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssueWhereUniqueInput } from "../../../inputs/IssueWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneIssueArgs {
  @TypeGraphQL.Field(_type => IssueWhereUniqueInput, {
    nullable: false
  })
  where!: IssueWhereUniqueInput;
}
