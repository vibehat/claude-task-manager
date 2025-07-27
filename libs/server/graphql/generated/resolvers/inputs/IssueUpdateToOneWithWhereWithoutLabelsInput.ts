import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueUpdateWithoutLabelsInput } from "../inputs/IssueUpdateWithoutLabelsInput";
import { IssueWhereInput } from "../inputs/IssueWhereInput";

@TypeGraphQL.InputType("IssueUpdateToOneWithWhereWithoutLabelsInput", {})
export class IssueUpdateToOneWithWhereWithoutLabelsInput {
  @TypeGraphQL.Field(_type => IssueWhereInput, {
    nullable: true
  })
  where?: IssueWhereInput | undefined;

  @TypeGraphQL.Field(_type => IssueUpdateWithoutLabelsInput, {
    nullable: false
  })
  data!: IssueUpdateWithoutLabelsInput;
}
