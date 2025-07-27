import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateManySubtaskInput } from "../inputs/IssueCreateManySubtaskInput";

@TypeGraphQL.InputType("IssueCreateManySubtaskInputEnvelope", {})
export class IssueCreateManySubtaskInputEnvelope {
  @TypeGraphQL.Field(_type => [IssueCreateManySubtaskInput], {
    nullable: false
  })
  data!: IssueCreateManySubtaskInput[];
}
