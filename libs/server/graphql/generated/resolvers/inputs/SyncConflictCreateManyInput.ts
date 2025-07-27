import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("SyncConflictCreateManyInput", {})
export class SyncConflictCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  operationType!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  taskId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  uiVersion!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  cliVersion!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  resolved?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  resolution?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  resolvedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  resolvedBy?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  timestamp?: Date | undefined;
}
