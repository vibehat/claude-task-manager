import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SyncConflictCreateManyInput } from "../../../inputs/SyncConflictCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySyncConflictArgs {
  @TypeGraphQL.Field(_type => [SyncConflictCreateManyInput], {
    nullable: false
  })
  data!: SyncConflictCreateManyInput[];
}
