import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CycleCreateOrConnectWithoutIssuesInput } from "../inputs/CycleCreateOrConnectWithoutIssuesInput";
import { CycleCreateWithoutIssuesInput } from "../inputs/CycleCreateWithoutIssuesInput";
import { CycleUpdateToOneWithWhereWithoutIssuesInput } from "../inputs/CycleUpdateToOneWithWhereWithoutIssuesInput";
import { CycleUpsertWithoutIssuesInput } from "../inputs/CycleUpsertWithoutIssuesInput";
import { CycleWhereInput } from "../inputs/CycleWhereInput";
import { CycleWhereUniqueInput } from "../inputs/CycleWhereUniqueInput";

@TypeGraphQL.InputType("CycleUpdateOneWithoutIssuesNestedInput", {})
export class CycleUpdateOneWithoutIssuesNestedInput {
  @TypeGraphQL.Field(_type => CycleCreateWithoutIssuesInput, {
    nullable: true
  })
  create?: CycleCreateWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => CycleCreateOrConnectWithoutIssuesInput, {
    nullable: true
  })
  connectOrCreate?: CycleCreateOrConnectWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => CycleUpsertWithoutIssuesInput, {
    nullable: true
  })
  upsert?: CycleUpsertWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => CycleWhereInput, {
    nullable: true
  })
  disconnect?: CycleWhereInput | undefined;

  @TypeGraphQL.Field(_type => CycleWhereInput, {
    nullable: true
  })
  delete?: CycleWhereInput | undefined;

  @TypeGraphQL.Field(_type => CycleWhereUniqueInput, {
    nullable: true
  })
  connect?: CycleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CycleUpdateToOneWithWhereWithoutIssuesInput, {
    nullable: true
  })
  update?: CycleUpdateToOneWithWhereWithoutIssuesInput | undefined;
}
