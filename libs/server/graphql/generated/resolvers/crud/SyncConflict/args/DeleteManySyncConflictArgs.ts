import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SyncConflictWhereInput } from "../../../inputs/SyncConflictWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySyncConflictArgs {
  @TypeGraphQL.Field(_type => SyncConflictWhereInput, {
    nullable: true
  })
  where?: SyncConflictWhereInput | undefined;
}
