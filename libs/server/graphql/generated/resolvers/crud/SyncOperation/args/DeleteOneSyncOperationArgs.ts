import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SyncOperationWhereUniqueInput } from "../../../inputs/SyncOperationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneSyncOperationArgs {
  @TypeGraphQL.Field(_type => SyncOperationWhereUniqueInput, {
    nullable: false
  })
  where!: SyncOperationWhereUniqueInput;
}
