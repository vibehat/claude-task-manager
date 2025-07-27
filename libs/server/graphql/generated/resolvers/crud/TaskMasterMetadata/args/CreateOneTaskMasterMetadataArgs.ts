import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskMasterMetadataCreateInput } from "../../../inputs/TaskMasterMetadataCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTaskMasterMetadataArgs {
  @TypeGraphQL.Field(_type => TaskMasterMetadataCreateInput, {
    nullable: false
  })
  data!: TaskMasterMetadataCreateInput;
}
