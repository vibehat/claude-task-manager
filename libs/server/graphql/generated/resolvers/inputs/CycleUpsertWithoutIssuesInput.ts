import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CycleCreateWithoutIssuesInput } from "../inputs/CycleCreateWithoutIssuesInput";
import { CycleUpdateWithoutIssuesInput } from "../inputs/CycleUpdateWithoutIssuesInput";
import { CycleWhereInput } from "../inputs/CycleWhereInput";

@TypeGraphQL.InputType("CycleUpsertWithoutIssuesInput", {})
export class CycleUpsertWithoutIssuesInput {
  @TypeGraphQL.Field(_type => CycleUpdateWithoutIssuesInput, {
    nullable: false
  })
  update!: CycleUpdateWithoutIssuesInput;

  @TypeGraphQL.Field(_type => CycleCreateWithoutIssuesInput, {
    nullable: false
  })
  create!: CycleCreateWithoutIssuesInput;

  @TypeGraphQL.Field(_type => CycleWhereInput, {
    nullable: true
  })
  where?: CycleWhereInput | undefined;
}
