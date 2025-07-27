import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateManyParentIssueInputEnvelope } from "../inputs/IssueCreateManyParentIssueInputEnvelope";
import { IssueCreateOrConnectWithoutParentIssueInput } from "../inputs/IssueCreateOrConnectWithoutParentIssueInput";
import { IssueCreateWithoutParentIssueInput } from "../inputs/IssueCreateWithoutParentIssueInput";
import { IssueScalarWhereInput } from "../inputs/IssueScalarWhereInput";
import { IssueUpdateManyWithWhereWithoutParentIssueInput } from "../inputs/IssueUpdateManyWithWhereWithoutParentIssueInput";
import { IssueUpdateWithWhereUniqueWithoutParentIssueInput } from "../inputs/IssueUpdateWithWhereUniqueWithoutParentIssueInput";
import { IssueUpsertWithWhereUniqueWithoutParentIssueInput } from "../inputs/IssueUpsertWithWhereUniqueWithoutParentIssueInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueUpdateManyWithoutParentIssueNestedInput", {})
export class IssueUpdateManyWithoutParentIssueNestedInput {
  @TypeGraphQL.Field(_type => [IssueCreateWithoutParentIssueInput], {
    nullable: true
  })
  create?: IssueCreateWithoutParentIssueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueCreateOrConnectWithoutParentIssueInput], {
    nullable: true
  })
  connectOrCreate?: IssueCreateOrConnectWithoutParentIssueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueUpsertWithWhereUniqueWithoutParentIssueInput], {
    nullable: true
  })
  upsert?: IssueUpsertWithWhereUniqueWithoutParentIssueInput[] | undefined;

  @TypeGraphQL.Field(_type => IssueCreateManyParentIssueInputEnvelope, {
    nullable: true
  })
  createMany?: IssueCreateManyParentIssueInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [IssueWhereUniqueInput], {
    nullable: true
  })
  set?: IssueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueWhereUniqueInput], {
    nullable: true
  })
  disconnect?: IssueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueWhereUniqueInput], {
    nullable: true
  })
  delete?: IssueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueWhereUniqueInput], {
    nullable: true
  })
  connect?: IssueWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueUpdateWithWhereUniqueWithoutParentIssueInput], {
    nullable: true
  })
  update?: IssueUpdateWithWhereUniqueWithoutParentIssueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueUpdateManyWithWhereWithoutParentIssueInput], {
    nullable: true
  })
  updateMany?: IssueUpdateManyWithWhereWithoutParentIssueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueScalarWhereInput], {
    nullable: true
  })
  deleteMany?: IssueScalarWhereInput[] | undefined;
}
