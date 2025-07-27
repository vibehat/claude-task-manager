import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskMasterMetadataUpdateInput } from "../../../inputs/TaskMasterMetadataUpdateInput";
import { TaskMasterMetadataWhereUniqueInput } from "../../../inputs/TaskMasterMetadataWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTaskMasterMetadataArgs {
  @TypeGraphQL.Field(_type => TaskMasterMetadataUpdateInput, {
    nullable: false
  })
  data!: TaskMasterMetadataUpdateInput;

  @TypeGraphQL.Field(_type => TaskMasterMetadataWhereUniqueInput, {
    nullable: false
  })
  where!: TaskMasterMetadataWhereUniqueInput;
}
