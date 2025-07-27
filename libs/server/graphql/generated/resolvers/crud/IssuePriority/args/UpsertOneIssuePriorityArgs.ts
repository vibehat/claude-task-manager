import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssuePriorityCreateInput } from "../../../inputs/IssuePriorityCreateInput";
import { IssuePriorityUpdateInput } from "../../../inputs/IssuePriorityUpdateInput";
import { IssuePriorityWhereUniqueInput } from "../../../inputs/IssuePriorityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneIssuePriorityArgs {
  @TypeGraphQL.Field(_type => IssuePriorityWhereUniqueInput, {
    nullable: false
  })
  where!: IssuePriorityWhereUniqueInput;

  @TypeGraphQL.Field(_type => IssuePriorityCreateInput, {
    nullable: false
  })
  create!: IssuePriorityCreateInput;

  @TypeGraphQL.Field(_type => IssuePriorityUpdateInput, {
    nullable: false
  })
  update!: IssuePriorityUpdateInput;
}
