import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SyncOperationCreateInput } from "../../../inputs/SyncOperationCreateInput";
import { SyncOperationUpdateInput } from "../../../inputs/SyncOperationUpdateInput";
import { SyncOperationWhereUniqueInput } from "../../../inputs/SyncOperationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSyncOperationArgs {
  @TypeGraphQL.Field(_type => SyncOperationWhereUniqueInput, {
    nullable: false
  })
  where!: SyncOperationWhereUniqueInput;

  @TypeGraphQL.Field(_type => SyncOperationCreateInput, {
    nullable: false
  })
  create!: SyncOperationCreateInput;

  @TypeGraphQL.Field(_type => SyncOperationUpdateInput, {
    nullable: false
  })
  update!: SyncOperationUpdateInput;
}
