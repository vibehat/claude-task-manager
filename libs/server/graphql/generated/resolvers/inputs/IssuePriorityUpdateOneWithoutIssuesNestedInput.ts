import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssuePriorityCreateOrConnectWithoutIssuesInput } from "../inputs/IssuePriorityCreateOrConnectWithoutIssuesInput";
import { IssuePriorityCreateWithoutIssuesInput } from "../inputs/IssuePriorityCreateWithoutIssuesInput";
import { IssuePriorityUpdateToOneWithWhereWithoutIssuesInput } from "../inputs/IssuePriorityUpdateToOneWithWhereWithoutIssuesInput";
import { IssuePriorityUpsertWithoutIssuesInput } from "../inputs/IssuePriorityUpsertWithoutIssuesInput";
import { IssuePriorityWhereInput } from "../inputs/IssuePriorityWhereInput";
import { IssuePriorityWhereUniqueInput } from "../inputs/IssuePriorityWhereUniqueInput";

@TypeGraphQL.InputType("IssuePriorityUpdateOneWithoutIssuesNestedInput", {})
export class IssuePriorityUpdateOneWithoutIssuesNestedInput {
  @TypeGraphQL.Field(_type => IssuePriorityCreateWithoutIssuesInput, {
    nullable: true
  })
  create?: IssuePriorityCreateWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => IssuePriorityCreateOrConnectWithoutIssuesInput, {
    nullable: true
  })
  connectOrCreate?: IssuePriorityCreateOrConnectWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => IssuePriorityUpsertWithoutIssuesInput, {
    nullable: true
  })
  upsert?: IssuePriorityUpsertWithoutIssuesInput | undefined;

  @TypeGraphQL.Field(_type => IssuePriorityWhereInput, {
    nullable: true
  })
  disconnect?: IssuePriorityWhereInput | undefined;

  @TypeGraphQL.Field(_type => IssuePriorityWhereInput, {
    nullable: true
  })
  delete?: IssuePriorityWhereInput | undefined;

  @TypeGraphQL.Field(_type => IssuePriorityWhereUniqueInput, {
    nullable: true
  })
  connect?: IssuePriorityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => IssuePriorityUpdateToOneWithWhereWithoutIssuesInput, {
    nullable: true
  })
  update?: IssuePriorityUpdateToOneWithWhereWithoutIssuesInput | undefined;
}
