import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskMasterMetadataUpdateManyMutationInput } from "../../../inputs/TaskMasterMetadataUpdateManyMutationInput";
import { TaskMasterMetadataWhereInput } from "../../../inputs/TaskMasterMetadataWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTaskMasterMetadataArgs {
  @TypeGraphQL.Field(_type => TaskMasterMetadataUpdateManyMutationInput, {
    nullable: false
  })
  data!: TaskMasterMetadataUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TaskMasterMetadataWhereInput, {
    nullable: true
  })
  where?: TaskMasterMetadataWhereInput | undefined;
}
