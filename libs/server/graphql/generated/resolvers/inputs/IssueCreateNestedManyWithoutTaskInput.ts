import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateManyTaskInputEnvelope } from "../inputs/IssueCreateManyTaskInputEnvelope";
import { IssueCreateOrConnectWithoutTaskInput } from "../inputs/IssueCreateOrConnectWithoutTaskInput";
import { IssueCreateWithoutTaskInput } from "../inputs/IssueCreateWithoutTaskInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueCreateNestedManyWithoutTaskInput", {})
export class IssueCreateNestedManyWithoutTaskInput {
  @TypeGraphQL.Field(_type => [IssueCreateWithoutTaskInput], {
    nullable: true
  })
  create?: IssueCreateWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueCreateOrConnectWithoutTaskInput], {
    nullable: true
  })
  connectOrCreate?: IssueCreateOrConnectWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => IssueCreateManyTaskInputEnvelope, {
    nullable: true
  })
  createMany?: IssueCreateManyTaskInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [IssueWhereUniqueInput], {
    nullable: true
  })
  connect?: IssueWhereUniqueInput[] | undefined;
}
