import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SyncConflictCreateInput } from "../../../inputs/SyncConflictCreateInput";
import { SyncConflictUpdateInput } from "../../../inputs/SyncConflictUpdateInput";
import { SyncConflictWhereUniqueInput } from "../../../inputs/SyncConflictWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSyncConflictArgs {
  @TypeGraphQL.Field(_type => SyncConflictWhereUniqueInput, {
    nullable: false
  })
  where!: SyncConflictWhereUniqueInput;

  @TypeGraphQL.Field(_type => SyncConflictCreateInput, {
    nullable: false
  })
  create!: SyncConflictCreateInput;

  @TypeGraphQL.Field(_type => SyncConflictUpdateInput, {
    nullable: false
  })
  update!: SyncConflictUpdateInput;
}
