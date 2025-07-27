import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssuePriorityWhereInput } from "../../inputs/IssuePriorityWhereInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnIssueIssuePriorityArgs {
  @TypeGraphQL.Field(_type => IssuePriorityWhereInput, {
    nullable: true
  })
  where?: IssuePriorityWhereInput | undefined;
}
