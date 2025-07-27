import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateWithoutSubtaskInput } from "../inputs/IssueCreateWithoutSubtaskInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueCreateOrConnectWithoutSubtaskInput", {})
export class IssueCreateOrConnectWithoutSubtaskInput {
  @TypeGraphQL.Field(_type => IssueWhereUniqueInput, {
    nullable: false
  })
  where!: IssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => IssueCreateWithoutSubtaskInput, {
    nullable: false
  })
  create!: IssueCreateWithoutSubtaskInput;
}
