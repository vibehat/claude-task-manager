import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SyncOperationCreateInput } from "../../../inputs/SyncOperationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSyncOperationArgs {
  @TypeGraphQL.Field(_type => SyncOperationCreateInput, {
    nullable: false
  })
  data!: SyncOperationCreateInput;
}
