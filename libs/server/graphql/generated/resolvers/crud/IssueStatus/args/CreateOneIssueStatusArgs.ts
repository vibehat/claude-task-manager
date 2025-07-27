import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssueStatusCreateInput } from "../../../inputs/IssueStatusCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneIssueStatusArgs {
  @TypeGraphQL.Field(_type => IssueStatusCreateInput, {
    nullable: false
  })
  data!: IssueStatusCreateInput;
}
