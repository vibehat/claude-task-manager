import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskMasterMetadataWhereInput } from "../../../inputs/TaskMasterMetadataWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTaskMasterMetadataArgs {
  @TypeGraphQL.Field(_type => TaskMasterMetadataWhereInput, {
    nullable: true
  })
  where?: TaskMasterMetadataWhereInput | undefined;
}
