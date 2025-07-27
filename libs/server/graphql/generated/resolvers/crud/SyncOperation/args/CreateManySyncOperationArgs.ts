import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SyncOperationCreateManyInput } from "../../../inputs/SyncOperationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySyncOperationArgs {
  @TypeGraphQL.Field(_type => [SyncOperationCreateManyInput], {
    nullable: false
  })
  data!: SyncOperationCreateManyInput[];
}
