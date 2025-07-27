import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SyncConflictCreateInput } from "../../../inputs/SyncConflictCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSyncConflictArgs {
  @TypeGraphQL.Field(_type => SyncConflictCreateInput, {
    nullable: false
  })
  data!: SyncConflictCreateInput;
}
