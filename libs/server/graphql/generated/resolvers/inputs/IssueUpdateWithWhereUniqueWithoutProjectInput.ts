import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueUpdateWithoutProjectInput } from "../inputs/IssueUpdateWithoutProjectInput";
import { IssueWhereUniqueInput } from "../inputs/IssueWhereUniqueInput";

@TypeGraphQL.InputType("IssueUpdateWithWhereUniqueWithoutProjectInput", {})
export class IssueUpdateWithWhereUniqueWithoutProjectInput {
  @TypeGraphQL.Field(_type => IssueWhereUniqueInput, {
    nullable: false
  })
  where!: IssueWhereUniqueInput;

  @TypeGraphQL.Field(_type => IssueUpdateWithoutProjectInput, {
    nullable: false
  })
  data!: IssueUpdateWithoutProjectInput;
}
