import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateManyCycleInputEnvelope } from "../inputs/IssueCreateManyCycleInputEnvelope";
import { IssueCreateOrConnectWithoutCycleInput } from "../inputs/IssueCreateOrConnectWithoutCycleInput";
import { IssueCreateWithoutCycleInput } from "../inputs/IssueCreateWithoutCycleInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueCreateNestedManyWithoutCycleInput", {})
export class IssueCreateNestedManyWithoutCycleInput {
  @TypeGraphQL.Field(_type => [IssueCreateWithoutCycleInput], {
    nullable: true
  })
  create?: IssueCreateWithoutCycleInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueCreateOrConnectWithoutCycleInput], {
    nullable: true
  })
  connectOrCreate?: IssueCreateOrConnectWithoutCycleInput[] | undefined;

  @TypeGraphQL.Field(_type => IssueCreateManyCycleInputEnvelope, {
    nullable: true
  })
  createMany?: IssueCreateManyCycleInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [IssueWhereUniqueInput], {
    nullable: true
  })
  connect?: IssueWhereUniqueInput[] | undefined;
}
