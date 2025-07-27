import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssuePriorityUpdateInput } from "../../../inputs/IssuePriorityUpdateInput";
import { IssuePriorityWhereUniqueInput } from "../../../inputs/IssuePriorityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneIssuePriorityArgs {
  @TypeGraphQL.Field(_type => IssuePriorityUpdateInput, {
    nullable: false
  })
  data!: IssuePriorityUpdateInput;

  @TypeGraphQL.Field(_type => IssuePriorityWhereUniqueInput, {
    nullable: false
  })
  where!: IssuePriorityWhereUniqueInput;
}
