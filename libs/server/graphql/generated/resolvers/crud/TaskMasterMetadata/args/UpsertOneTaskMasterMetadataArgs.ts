import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskMasterMetadataCreateInput } from "../../../inputs/TaskMasterMetadataCreateInput";
import { TaskMasterMetadataUpdateInput } from "../../../inputs/TaskMasterMetadataUpdateInput";
import { TaskMasterMetadataWhereUniqueInput } from "../../../inputs/TaskMasterMetadataWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTaskMasterMetadataArgs {
  @TypeGraphQL.Field(_type => TaskMasterMetadataWhereUniqueInput, {
    nullable: false
  })
  where!: TaskMasterMetadataWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskMasterMetadataCreateInput, {
    nullable: false
  })
  create!: TaskMasterMetadataCreateInput;

  @TypeGraphQL.Field(_type => TaskMasterMetadataUpdateInput, {
    nullable: false
  })
  update!: TaskMasterMetadataUpdateInput;
}
