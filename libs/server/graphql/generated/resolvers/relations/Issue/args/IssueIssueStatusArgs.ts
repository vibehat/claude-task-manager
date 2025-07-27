import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssueStatusWhereInput } from "../../../inputs/IssueStatusWhereInput";

@TypeGraphQL.ArgsType()
export class IssueIssueStatusArgs {
  @TypeGraphQL.Field(_type => IssueStatusWhereInput, {
    nullable: true
  })
  where?: IssueStatusWhereInput | undefined;
}
