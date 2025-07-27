import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SyncConflictUpdateInput } from "../../../inputs/SyncConflictUpdateInput";
import { SyncConflictWhereUniqueInput } from "../../../inputs/SyncConflictWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSyncConflictArgs {
  @TypeGraphQL.Field(_type => SyncConflictUpdateInput, {
    nullable: false
  })
  data!: SyncConflictUpdateInput;

  @TypeGraphQL.Field(_type => SyncConflictWhereUniqueInput, {
    nullable: false
  })
  where!: SyncConflictWhereUniqueInput;
}
