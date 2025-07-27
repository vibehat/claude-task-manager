import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TaskMasterMetadataWhereInput } from "../inputs/TaskMasterMetadataWhereInput";

@TypeGraphQL.InputType("TaskMasterMetadataWhereUniqueInput", {})
export class TaskMasterMetadataWhereUniqueInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => [TaskMasterMetadataWhereInput], {
    nullable: true
  })
  AND?: TaskMasterMetadataWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskMasterMetadataWhereInput], {
    nullable: true
  })
  OR?: TaskMasterMetadataWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskMasterMetadataWhereInput], {
    nullable: true
  })
  NOT?: TaskMasterMetadataWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updated?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;
}
