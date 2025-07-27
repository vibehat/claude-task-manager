import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssueOrderByWithRelationInput } from "../../../inputs/IssueOrderByWithRelationInput";
import { IssueWhereInput } from "../../../inputs/IssueWhereInput";
import { IssueWhereUniqueInput } from "../../../inputs/IssueWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateIssueArgs {
  @TypeGraphQL.Field(_type => IssueWhereInput, {
    nullable: true
  })
  where?: IssueWhereInput | undefined;

  @TypeGraphQL.Field(_type => [IssueOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: IssueOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => IssueWhereUniqueInput, {
    nullable: true
  })
  cursor?: IssueWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
