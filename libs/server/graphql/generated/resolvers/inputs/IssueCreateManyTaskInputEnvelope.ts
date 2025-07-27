import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateManyTaskInput } from "../inputs/IssueCreateManyTaskInput";

@TypeGraphQL.InputType("IssueCreateManyTaskInputEnvelope", {})
export class IssueCreateManyTaskInputEnvelope {
  @TypeGraphQL.Field(_type => [IssueCreateManyTaskInput], {
    nullable: false
  })
  data!: IssueCreateManyTaskInput[];
}
