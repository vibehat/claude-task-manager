import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateManyParentIssueInputEnvelope } from "../inputs/IssueCreateManyParentIssueInputEnvelope";
import { IssueCreateOrConnectWithoutParentIssueInput } from "../inputs/IssueCreateOrConnectWithoutParentIssueInput";
import { IssueCreateWithoutParentIssueInput } from "../inputs/IssueCreateWithoutParentIssueInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueCreateNestedManyWithoutParentIssueInput", {})
export class IssueCreateNestedManyWithoutParentIssueInput {
  @TypeGraphQL.Field(_type => [IssueCreateWithoutParentIssueInput], {
    nullable: true
  })
  create?: IssueCreateWithoutParentIssueInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueCreateOrConnectWithoutParentIssueInput], {
    nullable: true
  })
  connectOrCreate?: IssueCreateOrConnectWithoutParentIssueInput[] | undefined;

  @TypeGraphQL.Field(_type => IssueCreateManyParentIssueInputEnvelope, {
    nullable: true
  })
  createMany?: IssueCreateManyParentIssueInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [IssueWhereUniqueInput], {
    nullable: true
  })
  connect?: IssueWhereUniqueInput[] | undefined;
}
