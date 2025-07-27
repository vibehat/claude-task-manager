import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssuePriorityCreateManyInput } from "../../../inputs/IssuePriorityCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyIssuePriorityArgs {
  @TypeGraphQL.Field(_type => [IssuePriorityCreateManyInput], {
    nullable: false
  })
  data!: IssuePriorityCreateManyInput[];
}
