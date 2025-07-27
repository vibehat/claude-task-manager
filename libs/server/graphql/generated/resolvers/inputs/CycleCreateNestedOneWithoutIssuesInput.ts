import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CycleCreateOrConnectWithoutIssuesInput } from "../inputs/CycleCreateOrConnectWithoutIssuesInput";
import { CycleCreateWithoutIssuesInput } from "../inputs/CycleCreateWithoutIssuesInput";
import { CycleWhereUniqueInput } from "../inputs/CycleWhereUniqueInput";

@TypeGraphQL.InputType("CycleCreateNestedOneWithoutIssuesInput", {})
export class CycleCreateNestedOneWithoutIssuesInput {
  @TypeGraphQL.Field(_type => CycleCreateWithoutIssuesInput, {
    nullable: true
  })
  create?: CycleCreateWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => CycleCreateOrConnectWithoutIssuesInput, {
    nullable: true
  })
  connectOrCreate?: CycleCreateOrConnectWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => CycleWhereUniqueInput, {
    nullable: true
  })
  connect?: CycleWhereUniqueInput | undefined;
}
