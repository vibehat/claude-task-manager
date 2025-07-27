import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SyncConflictWhereUniqueInput } from "../../../inputs/SyncConflictWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneSyncConflictArgs {
  @TypeGraphQL.Field(_type => SyncConflictWhereUniqueInput, {
    nullable: false
  })
  where!: SyncConflictWhereUniqueInput;
}
