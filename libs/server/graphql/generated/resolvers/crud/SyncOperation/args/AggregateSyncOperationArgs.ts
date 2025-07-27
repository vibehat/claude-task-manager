import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SyncOperationOrderByWithRelationInput } from "../../../inputs/SyncOperationOrderByWithRelationInput";
import { SyncOperationWhereInput } from "../../../inputs/SyncOperationWhereInput";
import { SyncOperationWhereUniqueInput } from "../../../inputs/SyncOperationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSyncOperationArgs {
  @TypeGraphQL.Field(_type => SyncOperationWhereInput, {
    nullable: true
  })
  where?: SyncOperationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SyncOperationOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SyncOperationOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SyncOperationWhereUniqueInput, {
    nullable: true
  })
  cursor?: SyncOperationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
