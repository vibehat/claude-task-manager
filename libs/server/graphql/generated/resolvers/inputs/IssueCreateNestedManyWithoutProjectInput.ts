import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateManyProjectInputEnvelope } from "../inputs/IssueCreateManyProjectInputEnvelope";
import { IssueCreateOrConnectWithoutProjectInput } from "../inputs/IssueCreateOrConnectWithoutProjectInput";
import { IssueCreateWithoutProjectInput } from "../inputs/IssueCreateWithoutProjectInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueCreateNestedManyWithoutProjectInput", {})
export class IssueCreateNestedManyWithoutProjectInput {
  @TypeGraphQL.Field(_type => [IssueCreateWithoutProjectInput], {
    nullable: true
  })
  create?: IssueCreateWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueCreateOrConnectWithoutProjectInput], {
    nullable: true
  })
  connectOrCreate?: IssueCreateOrConnectWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => IssueCreateManyProjectInputEnvelope, {
    nullable: true
  })
  createMany?: IssueCreateManyProjectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [IssueWhereUniqueInput], {
    nullable: true
  })
  connect?: IssueWhereUniqueInput[] | undefined;
}
