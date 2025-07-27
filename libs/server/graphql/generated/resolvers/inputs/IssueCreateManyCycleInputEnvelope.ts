import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateManyCycleInput } from "../inputs/IssueCreateManyCycleInput";

@TypeGraphQL.InputType("IssueCreateManyCycleInputEnvelope", {})
export class IssueCreateManyCycleInputEnvelope {
  @TypeGraphQL.Field(_type => [IssueCreateManyCycleInput], {
    nullable: false
  })
  data!: IssueCreateManyCycleInput[];
}
