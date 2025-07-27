import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssueStatusUpdateManyMutationInput } from "../../../inputs/IssueStatusUpdateManyMutationInput";
import { IssueStatusWhereInput } from "../../../inputs/IssueStatusWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyIssueStatusArgs {
  @TypeGraphQL.Field(_type => IssueStatusUpdateManyMutationInput, {
    nullable: false
  })
  data!: IssueStatusUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => IssueStatusWhereInput, {
    nullable: true
  })
  where?: IssueStatusWhereInput | undefined;
}
