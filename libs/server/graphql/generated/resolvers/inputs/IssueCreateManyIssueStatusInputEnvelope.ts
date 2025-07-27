import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateManyIssueStatusInput } from "../inputs/IssueCreateManyIssueStatusInput";

@TypeGraphQL.InputType("IssueCreateManyIssueStatusInputEnvelope", {})
export class IssueCreateManyIssueStatusInputEnvelope {
  @TypeGraphQL.Field(_type => [IssueCreateManyIssueStatusInput], {
    nullable: false
  })
  data!: IssueCreateManyIssueStatusInput[];
}
