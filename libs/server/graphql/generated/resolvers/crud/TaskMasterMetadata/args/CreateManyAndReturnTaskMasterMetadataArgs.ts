import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskMasterMetadataCreateManyInput } from "../../../inputs/TaskMasterMetadataCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnTaskMasterMetadataArgs {
  @TypeGraphQL.Field(_type => [TaskMasterMetadataCreateManyInput], {
    nullable: false
  })
  data!: TaskMasterMetadataCreateManyInput[];
}
