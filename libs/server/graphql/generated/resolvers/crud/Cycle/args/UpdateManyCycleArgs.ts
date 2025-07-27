import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CycleUpdateManyMutationInput } from "../../../inputs/CycleUpdateManyMutationInput";
import { CycleWhereInput } from "../../../inputs/CycleWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCycleArgs {
  @TypeGraphQL.Field(_type => CycleUpdateManyMutationInput, {
    nullable: false
  })
  data!: CycleUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CycleWhereInput, {
    nullable: true
  })
  where?: CycleWhereInput | undefined;
}
