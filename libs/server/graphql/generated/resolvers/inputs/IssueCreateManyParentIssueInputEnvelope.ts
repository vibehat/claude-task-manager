import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateManyParentIssueInput } from "../inputs/IssueCreateManyParentIssueInput";

@TypeGraphQL.InputType("IssueCreateManyParentIssueInputEnvelope", {})
export class IssueCreateManyParentIssueInputEnvelope {
  @TypeGraphQL.Field(_type => [IssueCreateManyParentIssueInput], {
    nullable: false
  })
  data!: IssueCreateManyParentIssueInput[];
}
