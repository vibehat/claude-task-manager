import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateManyAssigneeInput } from "../inputs/IssueCreateManyAssigneeInput";

@TypeGraphQL.InputType("IssueCreateManyAssigneeInputEnvelope", {})
export class IssueCreateManyAssigneeInputEnvelope {
  @TypeGraphQL.Field(_type => [IssueCreateManyAssigneeInput], {
    nullable: false
  })
  data!: IssueCreateManyAssigneeInput[];
}
