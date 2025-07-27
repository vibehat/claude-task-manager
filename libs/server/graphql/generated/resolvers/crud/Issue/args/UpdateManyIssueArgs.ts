import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { IssueUpdateManyMutationInput } from "../../../inputs/IssueUpdateManyMutationInput";
import { IssueWhereInput } from "../../../inputs/IssueWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyIssueArgs {
  @TypeGraphQL.Field(_type => IssueUpdateManyMutationInput, {
    nullable: false
  })
  data!: IssueUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => IssueWhereInput, {
    nullable: true
  })
  where?: IssueWhereInput | undefined;
}
