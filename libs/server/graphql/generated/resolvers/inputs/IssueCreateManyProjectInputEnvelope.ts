import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueCreateManyProjectInput } from "../inputs/IssueCreateManyProjectInput";

@TypeGraphQL.InputType("IssueCreateManyProjectInputEnvelope", {})
export class IssueCreateManyProjectInputEnvelope {
  @TypeGraphQL.Field(_type => [IssueCreateManyProjectInput], {
    nullable: false
  })
  data!: IssueCreateManyProjectInput[];
}
