import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssueLabelWhereInput } from "../../inputs/IssueLabelWhereInput";

@TypeGraphQL.ArgsType()
export class IssueCountLabelsArgs {
  @TypeGraphQL.Field(_type => IssueLabelWhereInput, {
    nullable: true
  })
  where?: IssueLabelWhereInput | undefined;
}
