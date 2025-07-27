import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubtaskCreateOrConnectWithoutIssuesInput } from "../inputs/SubtaskCreateOrConnectWithoutIssuesInput";
import { SubtaskCreateWithoutIssuesInput } from "../inputs/SubtaskCreateWithoutIssuesInput";
import { SubtaskUpdateToOneWithWhereWithoutIssuesInput } from "../inputs/SubtaskUpdateToOneWithWhereWithoutIssuesInput";
import { SubtaskUpsertWithoutIssuesInput } from "../inputs/SubtaskUpsertWithoutIssuesInput";
import { SubtaskWhereInput } from "../inputs/SubtaskWhereInput";
import { SubtaskWhereUniqueInput } from "../inputs/SubtaskWhereUniqueInput";

@TypeGraphQL.InputType("SubtaskUpdateOneWithoutIssuesNestedInput", {})
export class SubtaskUpdateOneWithoutIssuesNestedInput {
  @TypeGraphQL.Field(_type => SubtaskCreateWithoutIssuesInput, {
    nullable: true
  })
  create?: SubtaskCreateWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => SubtaskCreateOrConnectWithoutIssuesInput, {
    nullable: true
  })
  connectOrCreate?: SubtaskCreateOrConnectWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => SubtaskUpsertWithoutIssuesInput, {
    nullable: true
  })
  upsert?: SubtaskUpsertWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => SubtaskWhereInput, {
    nullable: true
  })
  disconnect?: SubtaskWhereInput | undefined;

  @TypeGraphQL.Field(_type => SubtaskWhereInput, {
    nullable: true
  })
  delete?: SubtaskWhereInput | undefined;

  @TypeGraphQL.Field(_type => SubtaskWhereUniqueInput, {
    nullable: true
  })
  connect?: SubtaskWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SubtaskUpdateToOneWithWhereWithoutIssuesInput, {
    nullable: true
  })
  update?: SubtaskUpdateToOneWithWhereWithoutIssuesInput | undefined;
}
