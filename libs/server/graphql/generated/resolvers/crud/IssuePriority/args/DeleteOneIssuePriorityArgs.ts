import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssuePriorityWhereUniqueInput } from "../../../inputs/IssuePriorityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneIssuePriorityArgs {
  @TypeGraphQL.Field(_type => IssuePriorityWhereUniqueInput, {
    nullable: false
  })
  where!: IssuePriorityWhereUniqueInput;
}
