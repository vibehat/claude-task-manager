import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IssueLabelCreateManyLabelInput } from "../inputs/IssueLabelCreateManyLabelInput";

@TypeGraphQL.InputType("IssueLabelCreateManyLabelInputEnvelope", {})
export class IssueLabelCreateManyLabelInputEnvelope {
  @TypeGraphQL.Field(_type => [IssueLabelCreateManyLabelInput], {
    nullable: false
  })
  data!: IssueLabelCreateManyLabelInput[];
}
