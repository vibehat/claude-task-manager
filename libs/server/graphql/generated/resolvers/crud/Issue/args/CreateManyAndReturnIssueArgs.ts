import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssueCreateManyInput } from "../../../inputs/IssueCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnIssueArgs {
  @TypeGraphQL.Field(_type => [IssueCreateManyInput], {
    nullable: false
  })
  data!: IssueCreateManyInput[];
}
