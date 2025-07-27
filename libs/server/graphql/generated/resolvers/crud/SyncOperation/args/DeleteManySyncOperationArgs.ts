import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SyncOperationWhereInput } from "../../../inputs/SyncOperationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySyncOperationArgs {
  @TypeGraphQL.Field(_type => SyncOperationWhereInput, {
    nullable: true
  })
  where?: SyncOperationWhereInput | undefined;
}
