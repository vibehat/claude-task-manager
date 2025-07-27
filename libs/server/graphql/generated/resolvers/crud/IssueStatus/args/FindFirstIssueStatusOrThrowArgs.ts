import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssueStatusOrderByWithRelationInput } from "../../../inputs/IssueStatusOrderByWithRelationInput";
import { IssueStatusWhereInput } from "../../../inputs/IssueStatusWhereInput";
import { IssueStatusWhereUniqueInput } from "../../../inputs/IssueStatusWhereUniqueInput";
import { IssueStatusScalarFieldEnum } from "../../../../enums/IssueStatusScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstIssueStatusOrThrowArgs {
  @TypeGraphQL.Field(_type => IssueStatusWhereInput, {
    nullable: true
  })
  where?: IssueStatusWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IssueStatusOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: IssueStatusOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => IssueStatusWhereUniqueInput, {
    nullable: true
  })
  cursor?: IssueStatusWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [IssueStatusScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "color" | "iconName" | "createdAt" | "updatedAt"> | undefined;
}
