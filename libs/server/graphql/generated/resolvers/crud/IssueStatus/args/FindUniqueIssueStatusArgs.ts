import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssueStatusWhereUniqueInput } from "../../../inputs/IssueStatusWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueIssueStatusArgs {
  @TypeGraphQL.Field(_type => IssueStatusWhereUniqueInput, {
    nullable: false
  })
  where!: IssueStatusWhereUniqueInput;
}
