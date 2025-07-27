import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LabelCreateOrConnectWithoutIssuesInput } from "../inputs/LabelCreateOrConnectWithoutIssuesInput";
import { LabelCreateWithoutIssuesInput } from "../inputs/LabelCreateWithoutIssuesInput";
import { LabelUpdateToOneWithWhereWithoutIssuesInput } from "../inputs/LabelUpdateToOneWithWhereWithoutIssuesInput";
import { LabelUpsertWithoutIssuesInput } from "../inputs/LabelUpsertWithoutIssuesInput";
import { LabelWhereUniqueInput } from "../inputs/LabelWhereUniqueInput";

@TypeGraphQL.InputType("LabelUpdateOneRequiredWithoutIssuesNestedInput", {})
export class LabelUpdateOneRequiredWithoutIssuesNestedInput {
  @TypeGraphQL.Field(_type => LabelCreateWithoutIssuesInput, {
    nullable: true
  })
  create?: LabelCreateWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => LabelCreateOrConnectWithoutIssuesInput, {
    nullable: true
  })
  connectOrCreate?: LabelCreateOrConnectWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => LabelUpsertWithoutIssuesInput, {
    nullable: true
  })
  upsert?: LabelUpsertWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => LabelWhereUniqueInput, {
    nullable: true
  })
  connect?: LabelWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => LabelUpdateToOneWithWhereWithoutIssuesInput, {
    nullable: true
  })
  update?: LabelUpdateToOneWithWhereWithoutIssuesInput | undefined;
}
