import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssuePriorityOrderByWithRelationInput } from "../../../inputs/IssuePriorityOrderByWithRelationInput";
import { IssuePriorityWhereInput } from "../../../inputs/IssuePriorityWhereInput";
import { IssuePriorityWhereUniqueInput } from "../../../inputs/IssuePriorityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateIssuePriorityArgs {
  @TypeGraphQL.Field(_type => IssuePriorityWhereInput, {
    nullable: true
  })
  where?: IssuePriorityWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IssuePriorityOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: IssuePriorityOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => IssuePriorityWhereUniqueInput, {
    nullable: true
  })
  cursor?: IssuePriorityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
