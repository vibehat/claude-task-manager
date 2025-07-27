import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateManySubtaskInputEnvelope } from "../inputs/IssueCreateManySubtaskInputEnvelope";
import { IssueCreateOrConnectWithoutSubtaskInput } from "../inputs/IssueCreateOrConnectWithoutSubtaskInput";
import { IssueCreateWithoutSubtaskInput } from "../inputs/IssueCreateWithoutSubtaskInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueCreateNestedManyWithoutSubtaskInput", {})
export class IssueCreateNestedManyWithoutSubtaskInput {
  @TypeGraphQL.Field(_type => [IssueCreateWithoutSubtaskInput], {
    nullable: true
  })
  create?: IssueCreateWithoutSubtaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [IssueCreateOrConnectWithoutSubtaskInput], {
    nullable: true
  })
  connectOrCreate?: IssueCreateOrConnectWithoutSubtaskInput[] | undefined;

  @TypeGraphQL.Field(_type => IssueCreateManySubtaskInputEnvelope, {
    nullable: true
  })
  createMany?: IssueCreateManySubtaskInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [IssueWhereUniqueInput], {
    nullable: true
  })
  connect?: IssueWhereUniqueInput[] | undefined;
}
