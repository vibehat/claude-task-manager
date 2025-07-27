import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SyncOperationUpdateManyMutationInput } from "../../../inputs/SyncOperationUpdateManyMutationInput";
import { SyncOperationWhereInput } from "../../../inputs/SyncOperationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySyncOperationArgs {
  @TypeGraphQL.Field(_type => SyncOperationUpdateManyMutationInput, {
    nullable: false
  })
  data!: SyncOperationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SyncOperationWhereInput, {
    nullable: true
  })
  where?: SyncOperationWhereInput | undefined;
}
