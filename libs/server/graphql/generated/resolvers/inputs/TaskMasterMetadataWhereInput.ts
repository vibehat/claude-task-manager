import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("TaskMasterMetadataWhereInput", {})
export class TaskMasterMetadataWhereInput {
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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

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
