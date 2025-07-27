import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateManyIssuePriorityInput } from "../inputs/IssueCreateManyIssuePriorityInput";

@TypeGraphQL.InputType("IssueCreateManyIssuePriorityInputEnvelope", {})
export class IssueCreateManyIssuePriorityInputEnvelope {
  @TypeGraphQL.Field(_type => [IssueCreateManyIssuePriorityInput], {
    nullable: false
  })
  data!: IssueCreateManyIssuePriorityInput[];
}
