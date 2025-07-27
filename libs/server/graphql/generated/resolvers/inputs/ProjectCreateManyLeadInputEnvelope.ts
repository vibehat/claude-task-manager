import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateManyLeadInput } from "../inputs/ProjectCreateManyLeadInput";

@TypeGraphQL.InputType("ProjectCreateManyLeadInputEnvelope", {})
export class ProjectCreateManyLeadInputEnvelope {
  @TypeGraphQL.Field(_type => [ProjectCreateManyLeadInput], {
    nullable: false
  })
  data!: ProjectCreateManyLeadInput[];
}
