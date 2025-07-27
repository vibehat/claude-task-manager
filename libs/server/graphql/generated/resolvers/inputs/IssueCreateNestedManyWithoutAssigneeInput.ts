import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateManyAssigneeInputEnvelope } from "../inputs/IssueCreateManyAssigneeInputEnvelope";
import { IssueCreateOrConnectWithoutAssigneeInput } from "../inputs/IssueCreateOrConnectWithoutAssigneeInput";
import { IssueCreateWithoutAssigneeInput } from "../inputs/IssueCreateWithoutAssigneeInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueCreateNestedManyWithoutAssigneeInput", {})
export class IssueCreateNestedManyWithoutAssigneeInput {
  @TypeGraphQL.Field(_type => [IssueCreateWithoutAssigneeInput], {
    nullable: true
  })
  create?: IssueCreateWithoutAssigneeInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueCreateOrConnectWithoutAssigneeInput], {
    nullable: true
  })
  connectOrCreate?: IssueCreateOrConnectWithoutAssigneeInput[] | undefined;

  @TypeGraphQL.Field(_type => IssueCreateManyAssigneeInputEnvelope, {
    nullable: true
  })
  createMany?: IssueCreateManyAssigneeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [IssueWhereUniqueInput], {
    nullable: true
  })
  connect?: IssueWhereUniqueInput[] | undefined;
}
