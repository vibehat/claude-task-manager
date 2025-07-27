import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CycleCreateWithoutIssuesInput } from "../inputs/CycleCreateWithoutIssuesInput";
import { CycleWhereUniqueInput } from "../inputs/CycleWhereUniqueInput";

@TypeGraphQL.InputType("CycleCreateOrConnectWithoutIssuesInput", {})
export class CycleCreateOrConnectWithoutIssuesInput {
  @TypeGraphQL.Field(_type => CycleWhereUniqueInput, {
    nullable: false
  })
  where!: CycleWhereUniqueInput;

  @TypeGraphQL.Field(_type => CycleCreateWithoutIssuesInput, {
    nullable: false
  })
  create!: CycleCreateWithoutIssuesInput;
}
