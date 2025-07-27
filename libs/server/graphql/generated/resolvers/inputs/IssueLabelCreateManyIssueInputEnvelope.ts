import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueLabelCreateManyIssueInput } from "../inputs/IssueLabelCreateManyIssueInput";

@TypeGraphQL.InputType("IssueLabelCreateManyIssueInputEnvelope", {})
export class IssueLabelCreateManyIssueInputEnvelope {
  @TypeGraphQL.Field(_type => [IssueLabelCreateManyIssueInput], {
    nullable: false
  })
  data!: IssueLabelCreateManyIssueInput[];
}
