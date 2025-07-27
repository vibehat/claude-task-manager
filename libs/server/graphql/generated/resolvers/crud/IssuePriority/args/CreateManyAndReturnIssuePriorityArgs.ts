import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssuePriorityCreateManyInput } from "../../../inputs/IssuePriorityCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnIssuePriorityArgs {
  @TypeGraphQL.Field(_type => [IssuePriorityCreateManyInput], {
    nullable: false
  })
  data!: IssuePriorityCreateManyInput[];
}
