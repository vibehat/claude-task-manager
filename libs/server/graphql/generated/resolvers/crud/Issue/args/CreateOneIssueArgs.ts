import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssueCreateInput } from "../../../inputs/IssueCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneIssueArgs {
  @TypeGraphQL.Field(_type => IssueCreateInput, {
    nullable: false
  })
  data!: IssueCreateInput;
}
