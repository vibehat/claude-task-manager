import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateManyProjectInputEnvelope } from "../inputs/IssueCreateManyProjectInputEnvelope";
import { IssueCreateOrConnectWithoutProjectInput } from "../inputs/IssueCreateOrConnectWithoutProjectInput";
import { IssueCreateWithoutProjectInput } from "../inputs/IssueCreateWithoutProjectInput";
import { IssueScalarWhereInput } from "../inputs/IssueScalarWhereInput";
import { IssueUpdateManyWithWhereWithoutProjectInput } from "../inputs/IssueUpdateManyWithWhereWithoutProjectInput";
import { IssueUpdateWithWhereUniqueWithoutProjectInput } from "../inputs/IssueUpdateWithWhereUniqueWithoutProjectInput";
import { IssueUpsertWithWhereUniqueWithoutProjectInput } from "../inputs/IssueUpsertWithWhereUniqueWithoutProjectInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueUpdateManyWithoutProjectNestedInput", {})
export class IssueUpdateManyWithoutProjectNestedInput {
  @TypeGraphQL.Field(_type => [IssueCreateWithoutProjectInput], {
    nullable: true
  })
  create?: IssueCreateWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueCreateOrConnectWithoutProjectInput], {
    nullable: true
  })
  connectOrCreate?: IssueCreateOrConnectWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueUpsertWithWhereUniqueWithoutProjectInput], {
    nullable: true
  })
  upsert?: IssueUpsertWithWhereUniqueWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => IssueCreateManyProjectInputEnvelope, {
    nullable: true
  })
  createMany?: IssueCreateManyProjectInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [IssueUpdateWithWhereUniqueWithoutProjectInput], {
    nullable: true
  })
  update?: IssueUpdateWithWhereUniqueWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueUpdateManyWithWhereWithoutProjectInput], {
    nullable: true
  })
  updateMany?: IssueUpdateManyWithWhereWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueScalarWhereInput], {
    nullable: true
  })
  deleteMany?: IssueScalarWhereInput[] | undefined;
}
