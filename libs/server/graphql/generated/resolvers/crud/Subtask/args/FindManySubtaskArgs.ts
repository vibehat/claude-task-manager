import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubtaskOrderByWithRelationInput } from "../../../inputs/SubtaskOrderByWithRelationInput";
import { SubtaskWhereInput } from "../../../inputs/SubtaskWhereInput";
import { SubtaskWhereUniqueInput } from "../../../inputs/SubtaskWhereUniqueInput";
import { SubtaskScalarFieldEnum } from "../../../../enums/SubtaskScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManySubtaskArgs {
  @TypeGraphQL.Field(_type => SubtaskWhereInput, {
    nullable: true
  })
  where?: SubtaskWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SubtaskOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SubtaskOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SubtaskWhereUniqueInput, {
    nullable: true
  })
  cursor?: SubtaskWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SubtaskScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "title" | "description" | "details" | "testStrategy" | "status" | "parentId" | "dependencies" | "createdAt" | "updatedAt"> | undefined;
}
