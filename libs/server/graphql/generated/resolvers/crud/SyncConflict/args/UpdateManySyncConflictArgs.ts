import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SyncConflictUpdateManyMutationInput } from "../../../inputs/SyncConflictUpdateManyMutationInput";
import { SyncConflictWhereInput } from "../../../inputs/SyncConflictWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySyncConflictArgs {
  @TypeGraphQL.Field(_type => SyncConflictUpdateManyMutationInput, {
    nullable: false
  })
  data!: SyncConflictUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SyncConflictWhereInput, {
    nullable: true
  })
  where?: SyncConflictWhereInput | undefined;
}
