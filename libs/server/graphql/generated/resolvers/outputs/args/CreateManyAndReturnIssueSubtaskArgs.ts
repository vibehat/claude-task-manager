import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubtaskWhereInput } from "../../inputs/SubtaskWhereInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnIssueSubtaskArgs {
  @TypeGraphQL.Field(_type => SubtaskWhereInput, {
    nullable: true
  })
  where?: SubtaskWhereInput | undefined;
}
