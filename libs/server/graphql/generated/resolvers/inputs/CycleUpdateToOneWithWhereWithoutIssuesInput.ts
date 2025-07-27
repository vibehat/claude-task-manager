import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CycleUpdateWithoutIssuesInput } from "../inputs/CycleUpdateWithoutIssuesInput";
import { CycleWhereInput } from "../inputs/CycleWhereInput";

@TypeGraphQL.InputType("CycleUpdateToOneWithWhereWithoutIssuesInput", {})
export class CycleUpdateToOneWithWhereWithoutIssuesInput {
  @TypeGraphQL.Field(_type => CycleWhereInput, {
    nullable: true
  })
  where?: CycleWhereInput | undefined;

  @TypeGraphQL.Field(_type => CycleUpdateWithoutIssuesInput, {
    nullable: false
  })
  data!: CycleUpdateWithoutIssuesInput;
}
