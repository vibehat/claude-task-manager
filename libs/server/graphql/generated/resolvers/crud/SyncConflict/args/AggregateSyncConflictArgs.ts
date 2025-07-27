import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SyncConflictOrderByWithRelationInput } from "../../../inputs/SyncConflictOrderByWithRelationInput";
import { SyncConflictWhereInput } from "../../../inputs/SyncConflictWhereInput";
import { SyncConflictWhereUniqueInput } from "../../../inputs/SyncConflictWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSyncConflictArgs {
  @TypeGraphQL.Field(_type => SyncConflictWhereInput, {
    nullable: true
  })
  where?: SyncConflictWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SyncConflictOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SyncConflictOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SyncConflictWhereUniqueInput, {
    nullable: true
  })
  cursor?: SyncConflictWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
