import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssueStatusCreateManyInput } from "../../../inputs/IssueStatusCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnIssueStatusArgs {
  @TypeGraphQL.Field(_type => [IssueStatusCreateManyInput], {
    nullable: false
  })
  data!: IssueStatusCreateManyInput[];
}
