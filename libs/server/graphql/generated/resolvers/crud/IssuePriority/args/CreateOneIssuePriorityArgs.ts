import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssuePriorityCreateInput } from "../../../inputs/IssuePriorityCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneIssuePriorityArgs {
  @TypeGraphQL.Field(_type => IssuePriorityCreateInput, {
    nullable: false
  })
  data!: IssuePriorityCreateInput;
}
