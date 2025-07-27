import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssueWhereInput } from "../../inputs/IssueWhereInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnIssueParentIssueArgs {
  @TypeGraphQL.Field(_type => IssueWhereInput, {
    nullable: true
  })
  where?: IssueWhereInput | undefined;
}
