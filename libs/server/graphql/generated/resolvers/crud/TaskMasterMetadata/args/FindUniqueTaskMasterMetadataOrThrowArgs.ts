import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskMasterMetadataWhereUniqueInput } from "../../../inputs/TaskMasterMetadataWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTaskMasterMetadataOrThrowArgs {
  @TypeGraphQL.Field(_type => TaskMasterMetadataWhereUniqueInput, {
    nullable: false
  })
  where!: TaskMasterMetadataWhereUniqueInput;
}
