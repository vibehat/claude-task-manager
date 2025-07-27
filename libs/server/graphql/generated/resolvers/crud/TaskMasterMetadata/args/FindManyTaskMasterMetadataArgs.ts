import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskMasterMetadataOrderByWithRelationInput } from "../../../inputs/TaskMasterMetadataOrderByWithRelationInput";
import { TaskMasterMetadataWhereInput } from "../../../inputs/TaskMasterMetadataWhereInput";
import { TaskMasterMetadataWhereUniqueInput } from "../../../inputs/TaskMasterMetadataWhereUniqueInput";
import { TaskMasterMetadataScalarFieldEnum } from "../../../../enums/TaskMasterMetadataScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyTaskMasterMetadataArgs {
  @TypeGraphQL.Field(_type => TaskMasterMetadataWhereInput, {
    nullable: true
  })
  where?: TaskMasterMetadataWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TaskMasterMetadataOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TaskMasterMetadataOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TaskMasterMetadataWhereUniqueInput, {
    nullable: true
  })
  cursor?: TaskMasterMetadataWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TaskMasterMetadataScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created" | "updated" | "description"> | undefined;
}
