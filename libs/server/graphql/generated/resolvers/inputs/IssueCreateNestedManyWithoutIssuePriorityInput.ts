import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateManyIssuePriorityInputEnvelope } from "../inputs/IssueCreateManyIssuePriorityInputEnvelope";
import { IssueCreateOrConnectWithoutIssuePriorityInput } from "../inputs/IssueCreateOrConnectWithoutIssuePriorityInput";
import { IssueCreateWithoutIssuePriorityInput } from "../inputs/IssueCreateWithoutIssuePriorityInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueCreateNestedManyWithoutIssuePriorityInput", {})
export class IssueCreateNestedManyWithoutIssuePriorityInput {
  @TypeGraphQL.Field(_type => [IssueCreateWithoutIssuePriorityInput], {
    nullable: true
  })
  create?: IssueCreateWithoutIssuePriorityInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueCreateOrConnectWithoutIssuePriorityInput], {
    nullable: true
  })
  connectOrCreate?: IssueCreateOrConnectWithoutIssuePriorityInput[] | undefined;

  @TypeGraphQL.Field(_type => IssueCreateManyIssuePriorityInputEnvelope, {
    nullable: true
  })
  createMany?: IssueCreateManyIssuePriorityInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [IssueWhereUniqueInput], {
    nullable: true
  })
  connect?: IssueWhereUniqueInput[] | undefined;
}
