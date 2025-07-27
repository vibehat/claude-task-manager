import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssuePriorityUpdateManyMutationInput } from "../../../inputs/IssuePriorityUpdateManyMutationInput";
import { IssuePriorityWhereInput } from "../../../inputs/IssuePriorityWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyIssuePriorityArgs {
  @TypeGraphQL.Field(_type => IssuePriorityUpdateManyMutationInput, {
    nullable: false
  })
  data!: IssuePriorityUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => IssuePriorityWhereInput, {
    nullable: true
  })
  where?: IssuePriorityWhereInput | undefined;
}
