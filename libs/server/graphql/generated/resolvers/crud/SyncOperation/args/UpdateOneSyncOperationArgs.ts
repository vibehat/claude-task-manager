import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SyncOperationUpdateInput } from "../../../inputs/SyncOperationUpdateInput";
import { SyncOperationWhereUniqueInput } from "../../../inputs/SyncOperationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSyncOperationArgs {
  @TypeGraphQL.Field(_type => SyncOperationUpdateInput, {
    nullable: false
  })
  data!: SyncOperationUpdateInput;

  @TypeGraphQL.Field(_type => SyncOperationWhereUniqueInput, {
    nullable: false
  })
  where!: SyncOperationWhereUniqueInput;
}
